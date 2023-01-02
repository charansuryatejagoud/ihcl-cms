import { getClient } from "../shared";
import { ensureMetadataIdentifiersAreUnique } from "../../branding/lib/metadata-identifier";

const client = getClient("develop");
console.log();
const run = async () => {
  console.log("Running...");
  const args = process.argv.slice(2);
  console.log(args);
  const docs = await client.fetch(
    `*[_type == "page" && path in ${JSON.stringify(args)}]`,
  );
  for (const doc of docs) {
    try {
      console.log(`Updating ${doc.path}`);
      const finalDocument = ensureMetadataIdentifiersAreUnique(doc);
      await client.createOrReplace(finalDocument);
    } catch (error) {
      console.error(
        `${doc.path} Error: ${error.message}, Skipping document update`,
      );
    }
  }
};

run();
