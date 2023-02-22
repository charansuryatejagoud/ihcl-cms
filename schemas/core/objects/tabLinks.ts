import { SchemaItem, VariantDefinition } from "../../types";

export function tabLinks({ items }: { items: SchemaItem[] }) {
  return {
    name: "tabLinks",
    title: "Tab Links",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: [{ type: "tabs" }],
      },
    ],
  };
}

export function tabs({ items }: { items: SchemaItem[] }) {
  return {
    name: "tabs",
    title: "Tabs",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "tabLinks",
        title: "TabLinks",
        type: "array",
        of: items,
      },
    ],
  };
}
