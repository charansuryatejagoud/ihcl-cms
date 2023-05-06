import { RiSeparator as Icon } from "react-icons/ri";

import { IoApps, IoSettings } from "react-icons/io5";

export default {
  name: "divider",
  title: "[IHCL] Divider",
  type: "object",
  icon: Icon,
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      name: "thickness",
      title: "Thickness",
      type: "string",
      options: {
        list: [
          { title: "Thin", value: "thin" },
          { title: "Thick", value: "thick" },
        ],
      },
    },
    {
      name: "isFullWidth",
      title: "Is full width?",
      type: "boolean",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Gradient", value: "gradient" },
        ],
      },
      initialValue: "default",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
      group: "configuration",
    },
  ],
};
