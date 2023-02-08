import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";

export default {
  name: "comparator",
  title: "Comparator",
  type: "object",
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "comparativeItems",
      title: "Comparative Items",
      type: "array",
      of: [{ type: "comparativeItems" }],
    },
    {
      name: "specificationItems",
      title: "specification Items",
      type: "array",
      of: [{ type: "specificationItems" }],
    },
  ],
};
