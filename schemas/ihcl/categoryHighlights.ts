import { IoBrushOutline, IoApps, IoSettings } from "react-icons/io5";

export default {
  name: "categoryHighlights",
  title: "Category Highlights",
  type: "object",
  icon: IoBrushOutline,
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    },
    {
      title: "Identifier",
      description: "This will be used to identify this Schema when rendering",
      name: "identifier",
      type: "string",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "items" }],
    },
  ],
};
