import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoSend as Icon,
  IoSettings,
} from "react-icons/io5";
import { inputFieldTypes } from "../../schemas/constants";
import { VariantDefinition } from "schemas/types";

export default function inputField({
  variants,
}: {
  variants: VariantDefinition[];
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
        title: "Input Field Type",
        name: "inputFieldType",
        type: "string",
        options: {
          list: [...inputFieldTypes],
        },
      },
      { title: "Hint Text", name: "hintText", type: "string" },
      { title: "Helper Text", name: "helperText", type: "string" },
      { title: "Error Text", name: "errorText", type: "string" },
      { title: "Is Input Field Read Only?", name: "readOnly", type: "boolean" },
      { title: "Max Width", name: "fieldMaxWidth", type: "number" },
      {
        title: "Max Length",
        name: "maxLength",
        type: "string",
        description: "Number of characters allow for the input component",
      },
      { title: "Prefix Icon", name: "prefixIcon", type: "image" },
      { title: "Suffix Icon", name: "suffixIcon", type: "image" },
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
        name: "clusterItems",
        title: "Cluster Items",
        type: "array",
        of: [
          {
            type: "object",
            title: "Cluster Item",
            fields: [
              { name: "key", title: "Key", type: "string" },
              { name: "isForm", title: "Is Form", type: "boolean" },
              {
                name: "items",
                title: "Items",
                type: "array",
                of: [{ type: "formComponent" }],
                hidden: ({ parent }) => !parent?.isForm,
              },
            ],
          },
        ],
        hidden: ({ parent }) => parent?.inputFieldType !== "dropDown",
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
          title: `${hiddenIndicator}${title ?? "<Input Field>"}`,
          subtitle: `${subtitle ?? ""}${variantText}`,
        };
      },
    },
  };
}
