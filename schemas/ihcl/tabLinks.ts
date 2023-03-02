import { SchemaItem, VariantDefinition } from "../types";
import { IoTabletLandscape, IoSquare } from "react-icons/io5";
interface TabLinksProps {
  items: SchemaItem[];
  variants: VariantDefinition[];
}
interface TabsProps {
  items: SchemaItem[];
}
export function tabLinks(props: TabLinksProps) {
  return {
    name: "tabLinks",
    title: "Tab Links",
    type: "object",
    icon: IoTabletLandscape,
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: [...props.variants],
        },
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: [{ type: "tabs" }],
      },
    ],
    preview: {
      select: {
        title: "title",
        variant: "variant",
        items: "items",
      },
      prepare({ title, variant, items }) {
        const count = items?.length || 0;
        const countText = count === 1 ? "1 Tab" : `${count} Tabs`;
        return {
          title: `${title ?? "<Tabs>"}`,
          subtitle: `${variant ?? ""}(${countText})`,
        };
      },
    },
  };
}

export function tabs(props: TabsProps) {
  return {
    name: "tabs",
    title: "Tabs",
    type: "object",
    icon: IoSquare,
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
        of: props.items,
      },
    ],
    preview: {
      select: {
        title: "title",
        items: "tabLinks",
      },
      prepare({ title, items }) {
        const count = items?.length || 0;
        const countText = count === 1 ? "1 Item" : `${count} Items`;
        return {
          title: `${title ?? "<Tab>"} ${title ? "-Tab" : ""}`,
          subtitle: `(${countText})`,
        };
      },
    },
  };
}
