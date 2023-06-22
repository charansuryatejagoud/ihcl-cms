import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";

export const comparatorPreview = {
  select: {
    title: "title",
    items: "specifications",
    subtitle: "subtitle",
    hidden: "isHidden",
  },
  prepare({ title, items, subtitle, hidden }) {
    const count = items?.length || 0;
    const countText = count === 1 ? "1 item" : `${count} items`;
    const hiddenIndicator = hidden ? "🚫 " : "";
    return {
      title: `${hiddenIndicator}${title ?? "<Comparator>"}`,
      subtitle: `${subtitle || ""} (${countText})`,
    };
  },
};

export default {
  name: "comparator",
  title: "Comparator",
  type: "object",
  initialValue: { showComparison: true },
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  preview: comparatorPreview,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "showComparison",
      title: "Show Comparison",
      type: "boolean",
      description:
        "This is for VIEW COMPARISON Dropdown and wherever Comparison is showed, if enabled Comparison is Displayed",
    },
    {
      name: "comparatives",
      title: "Comparatives",
      type: "array",
      of: [{ type: "comparative" }],
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "specification" }],
    },
  ],
};
