import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoSend as Icon,
  IoSettings,
} from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "schemas/types";

export default function form({ variants }: { variants: VariantDefinition[] }) {
  return {
    title: "Form",
    name: "formComponent",
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
        // validation: (Rule) => Rule.required(),
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
        group: "main",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        rows: 6,
        group: "main",
      },
      {
        name: "logo",
        title: "logo",
        type: "image",
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
      // {
      //   title: "Content",
      //   name: "content",
      //   type: "blockContent",
      // },
      {
        title: "Is Multi Block Content?",
        name: "isMultiBlockContent",
        type: "boolean",
      },
      {
        title: "Content",
        name: "singleContent",
        type: "blockContent",
        hidden: ({ parent }) => parent?.isMultiBlockContent,
      },
      {
        title: "Multi Block Contents",
        name: "content",
        type: "array",
        of: [
          {
            type: "blockSection",
          },
        ],
        hidden: ({ parent }) => !parent?.isMultiBlockContent,
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: [{ type: "inputField" }],
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
          title: `${hiddenIndicator}${title ?? "<Form>"}`,
          subtitle: `${subtitle ?? ""}${variantText}`,
        };
      },
    },
  };
}
