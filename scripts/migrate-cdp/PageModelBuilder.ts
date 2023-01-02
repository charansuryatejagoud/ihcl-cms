import jsonata from "jsonata";
import _ from "lodash";
import { nanoid } from "nanoid";
import fetch from "node-fetch";
import { basename } from "path";
import { componentMap } from "./componentMap";

export class PageModelBuilder {
  private static lookup = {
    paths: {
      query: jsonata(
        "`:items`.root.`:items`.navigation.items.children[3].children.path",
      ),
      url: () =>
        "https://author-tatadigital-prod.adobecqms.net/content/tcp/en.model.json",
    },
    itemsOrder: {
      query: jsonata(
        "`:items`.root.`:items`.responsivegrid.`:items`.responsivegrid.`:itemsOrder`",
      ),
      url: (path: string) =>
        `https://author-tatadigital-prod.adobecqms.net${path}.model.json`,
    },
    items: {
      query: jsonata("`jcr:content`.root.responsivegrid.responsivegrid"),
      url: (path: string) =>
        `https://author-tatadigital-prod.adobecqms.net${path}.infinity.json`,
    },
  };

  async getAllCDPPaths() {
    const json = await PageModelBuilder.aemFetch(
      PageModelBuilder.lookup.paths.url(),
    );
    return PageModelBuilder.lookup.paths.query.evaluate(json);
  }

  async getModel(path: string) {
    const [itemsJson, itemsOrderJson] = await Promise.all([
      PageModelBuilder.aemFetch(PageModelBuilder.lookup.items.url(path)),
      PageModelBuilder.aemFetch(PageModelBuilder.lookup.itemsOrder.url(path)),
    ]);

    const items = PageModelBuilder.lookup.items.query.evaluate(itemsJson);
    const order =
      PageModelBuilder.lookup.itemsOrder.query.evaluate(itemsOrderJson);

    const title = itemsOrderJson.title;

    const blockItems = order.map((key) => {
      const item = items[key];
      const type = item["sling:resourceType"];
      if (!type) {
        return undefined;
      }

      const mapper = componentMap[type] ?? componentMap["unknown"];

      const mappedItem = mapper(item);
      return mappedItem;
    });

    return {
      _type: "page",
      _id: `story-${basename(path)}`,
      title,
      path: `/story/${basename(path)}`,
      variant: "article",
      itemsRepresentation: "single",
      navigationVariant: "default.appbar",
      items: [this.createBlockSection(blockItems)],
    };
  }

  private createBlockSection(items: any[]) {
    const blocks = _.chain(items)
      .flattenDepth(2)
      .filter((x) => !!x)
      .map((item) => {
        return { _key: nanoid(), ...item };
      })
      .value();

    return {
      _type: "blockSection",
      _key: nanoid(),
      identifier: "article",
      title: "Article Content",
      content: blocks,
    };
  }

  private static async aemFetch(url: string) {
    const username = "cdpuser";
    const password = "X4}6,9a=]ZfFtfa)";

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${Buffer.from(
          `${username}:${password}`,
          "binary",
        ).toString("base64")}`,
      },
    });

    return response.json();
  }
}
