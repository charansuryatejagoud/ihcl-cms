import { PageModelBuilder } from "./PageModelBuilder";
import { mkdir, rm, writeFile } from "fs/promises";
import fsPath from "path";
import { createWriteStream, readFileSync } from "fs";
import { glob } from "glob";
import { getClient } from "../shared";
import { nanoid } from "nanoid";
import _ from "lodash";

type RunMode = "local" | "network" | "all-stories-page";

const config: {
  mode: RunMode;
  outputDir: string;
  dryRun: boolean;
  outFile: () => string;
} = {
  mode: "all-stories-page",
  outputDir: `${process.env.HOME}/Downloads/cdp`,
  dryRun: false,
  outFile: () => {
    return `${config.outputDir}/articles.ndjson`;
  },
};

run();

async function run() {
  switch (config.mode) {
    case "local":
      buildArticlesNDJSON();
      break;
    case "network":
      await rm(config.outputDir, { recursive: true });
      await mkdir(config.outputDir, { recursive: true });

      const builder = new PageModelBuilder();
      const paths = await builder.getAllCDPPaths();

      await fetchFromNetwork(paths, builder);

      break;
    case "all-stories-page":
      await uploadAllArticlesPage();
      break;
  }
}

async function uploadAllArticlesPage() {
  const paths = glob.sync(`${config.outputDir}/*.json`);

  const cards = paths.map((path) => {
    const text = readFileSync(path, "utf8");
    const json = JSON.parse(text);

    return {
      _type: "card",
      _key: nanoid(),
      variant: "card-default",
      title: json.title,
      url: json.path,
      urlType: "internal",
    };
  });

  const page = {
    _type: "page",
    _id: "story-all",
    title: `All Stories (${paths.length})`,
    path: "/story/all",
    variant: "page",
    itemsRepresentation: "list",
    navigationVariant: "default.appbar",
    items: cards,
  };

  await getClient("develop").createOrReplace(page);

  console.log(`Uploaded page: ${page.path}`);
}

function buildArticlesNDJSON() {
  const stream = createWriteStream(config.outFile());
  const paths = glob.sync(`${config.outputDir}/*.json`);

  paths.forEach((path) => {
    const text = readFileSync(path, "utf8");
    const json = JSON.parse(text);

    stream.write(JSON.stringify(json));
    stream.write("\n");
  });
  stream.close();
}

async function fetchFromNetwork(paths, builder: PageModelBuilder) {
  const failedPaths = [];
  const batches = _.chunk(paths, 100);
  for await (let batch of batches) {
    await Promise.all(
      batch.map(async (path: string) => {
        const filename = `${fsPath.basename(path)}.json`;

        try {
          const model = await builder.getModel(path);

          if (!config.dryRun) {
            const file = fsPath.resolve(config.outputDir, filename);
            await writeFile(file, JSON.stringify(model, null, 4));
          }

          console.log(filename, "...DONE");
        } catch (e) {
          failedPaths.push(filename);
          console.log(filename, "...FAILED");
        }
      }),
    );
  }

  console.log(
    `Succeeded: ${paths.length - failedPaths.length}, Failed: ${
      failedPaths.length
    }`,
  );
}

/// query: A GROQ that returns an array of _ids
async function deleteMatchingQuery(
  query: string,
  dataset: "develop" | "staging" | "production" = "develop",
) {
  const client = getClient(dataset);

  return client
    .fetch(query)
    .then((ids) => {
      if (!ids.length) {
        console.log("No items to delete");
        return true;
      }

      if (typeof ids[0] !== "string") {
        throw new Error(
          "It doesn't look like the query returns an array of _ids.",
        );
      }

      console.log(`Deleting ${ids.length} item(s)`);

      return ids
        .reduce((trx, id) => trx.delete(id), client.transaction())
        .commit()
        .then(() => console.log("Done!"));
    })
    .catch((err) => {
      console.error(err);
    });
}
