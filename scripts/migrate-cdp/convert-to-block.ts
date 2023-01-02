import Schema from "@sanity/schema";
import blockTools from "@sanity/block-tools";
import { JSDOM } from "jsdom";

// Start with compiling a schema we can work against
const defaultSchema = Schema.compile({
  name: "default",
  types: [
    {
      type: "object",
      name: "content",
      fields: [
        {
          title: "Body",
          name: "body",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
  ],
});

// The compiled schema type for the content type that holds the block array
const blockContentType = defaultSchema
  .get("content")
  .fields.find((field) => field.name === "body").type;

export function convertToBlocks(html?: string) {
  const blocks = blockTools.htmlToBlocks(html ?? "", blockContentType, {
    parseHtml: (html) => new JSDOM(html).window.document,
  });

  return blocks;
}
