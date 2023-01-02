import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";

export default {
  name: "neupass.acceleratorHeader",
  title: "[NeuPass] accelerator Header",
  type: "object",
  icon: Icon,
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    },
    {
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
      group: "configuration",
    },
  ],
};
