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
