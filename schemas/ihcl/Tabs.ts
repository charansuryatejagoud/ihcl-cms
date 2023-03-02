import { SchemaItem, VariantDefinition } from "../types";
import { IoTabletLandscape, IoSquare } from "react-icons/io5";
interface TabsProps {
  items: SchemaItem[];
  variants: VariantDefinition[];
}
interface TabProps {
  items: SchemaItem[];
}
export function tabs(props: TabsProps) {
  return {
    name: "tabsComponent",
    title: "Tabs",
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
        name: "tabs",
        title: "Tabs",
        type: "array",
        of: [{ type: "tab" }],
      },
    ],
    preview: {
      select: {
        title: "title",
        variant: "variant",
        items: "tabs",
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

export function tab(props: TabProps) {
  return {
    name: "tab",
    title: "Tab",
    type: "object",
    icon: IoSquare,
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "tabItems",
        title: "Tab Items",
        type: "array",
        of: props.items,
      },
    ],
    preview: {
      select: {
        title: "title",
        items: "tabItems",
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
