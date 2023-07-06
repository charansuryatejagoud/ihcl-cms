import { IoApps, IoConstruct as Icon, IoSettings, IoConstruct } from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "schemas/types";

interface Props {
  items: SchemaItem[];
}

export default function custom(props: Props) {
  return {
    name: "custom",
    title: "Custom",
    type: "object",
    icon: Icon,
    groups: [
      { name: "main", title: "Main", icon: IoConstruct },
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
        name: "items",
        title: "Items",
        type: "array",
        of: props.items,
        group: "main",
        validation: (Rule) => Rule.required().length(1)
      },
    ],
  };
}
