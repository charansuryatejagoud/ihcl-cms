import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoSend as Icon,
  IoSettings,
} from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "schemas/types";

export default function inputField({
  variants,
  items,
}: {
  variants: SchemaItem[];
  items: SchemaItem[];
}) {
  return {
    title: "[IHCL] Input Field",
    name: "inputField",
    type: "object",
    options: { collapsed: false, collapsible: true },
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
        group: "main",
      },
      {
        name: "logo",
        title: "logo",
        type: "imageAsset",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: { list: variants },
        group: "main",
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: { list: variants },
        group: "main",
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: items,
        // type: "formComponent",
        group: "main",
      },
      {
        name: "PrimaryAction",
        title: "Primary Action",
        type: "navigationItem",
        group: "main",
      },
      {
        name: "secondaryAction",
        title: "Secondary Action",
        type: "navigationItem",
        group: "main",
      },
      //   { title: "Url", name: "Url", type: "link" },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "subtitle",
        variant: "variant",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, variant, hidden }) {
        const hiddenIndicator = hidden ? "🚫 " : "";
        const variantText = variant ? `(${variant})` : "";

        return {
          title: `${hiddenIndicator}${title ?? "<inputField>"}`,
          subtitle: `${subtitle ?? ""}${variantText}`,
        };
      },
    },
  };
}
