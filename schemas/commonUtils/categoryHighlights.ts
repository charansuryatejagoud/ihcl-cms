import { IoBrushOutline, IoApps, IoSettings } from "react-icons/io5";
import { VariantDefinition } from "schemas/types";
interface Props {
  variants: VariantDefinition[];
}
export default function categoryHighlights(props: Props){
  return {
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
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: props.variants,
      },
      group: "main",
    },
    {
      name: "largeVariant",
      title: "Large Variant",
      type: "string",
      options: {
        list: props.variants,
      },
      group: "main",
    },
    {
      name: "items",
      title: "items",
      type: "array",
      of: [{ type: "items" }],
    },
  ],
  }
};
