import {IoApps, IoLayersOutline as Icon, IoSettings,} from "react-icons/io5";
import {hiddenField} from "../../shared-utils";

export const sectionPreview = {
  select: {
    title: "title",
    items: "items",
    subtitle: "subtitle",
    hidden: "isHidden",
  },
  prepare({ title, items, subtitle, hidden }) {
    const count = items?.length || 0;
    const countText = count === 1 ? "1 item" : `${count} items`;
    const hiddenIndicator = hidden ? "🚫 " : "";
    return {
      title: `${hiddenIndicator}${title}` ?? "<Section>",
      subtitle: `${subtitle || ""} (${countText})`,
    };
  },
};

export default function section({
  items,
  headers,
  footers,
}: {
  items;
  headers;
  footers;
}) {
  return {
    name: "section",
    title: "Section",
    type: "object",
    icon: Icon,
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      { ...hiddenField, group: "main" },
      {
        name: "title",
        title: "Title",
        type: "string",
        group: "main",
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
        group: "main",
      },
      {
        name: "identifier",
        title: "Unique Identifier",
        type: "string",
        description:
          "Unique identifier for tab elements. Required for default tab selection from URL",
        group: "main",
      },
      {
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
        group: "main",
      },
      {
        name: "itemsRepresentation",
        title: "Items Representation",
        type: "string",
        options: {
          list: [
            { title: "Vertical List", value: "list" },
            { title: "Single Item", value: "single" },
          ],
        },
        group: "main",
      },
      {
        title: "Section Headers",
        name: "headers",
        type: "array",
        of: headers,
        group: "configuration",
      },
      {
        title: "Section Footers",
        name: "footers",
        type: "array",
        of: footers,
        group: "configuration",
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: items.filter((item) => item.type != "section"),
        group: "main",
      },
      {
        name: "metadata",
        type: "metadata",
        title: "Metadata",
        group: "configuration",
      },
    ],
    preview: sectionPreview,
  };
}
