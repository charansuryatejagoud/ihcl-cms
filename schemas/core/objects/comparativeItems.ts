import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";

export default {
  name: "comparativeItems",
  title: "Comparative Items",
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
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "primaryAction",
      title: "Primary Action",
      type: "navigationItem",
    },
    {
      name: "secondaryAction",
      title: "Secondary Action",
      type: "navigationItem",
    },
  ],
};
