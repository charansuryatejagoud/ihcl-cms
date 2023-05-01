import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoSend as Icon,
  IoSettings,
} from "react-icons/io5";
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
        name: "parameterMap",
        title: "Parameter Map",
        description: "Parameters as a set of key-value pairs",
        type: "array",
        of: [
          {
            type: "object",
            title: "Parameter",
            icon: ParameterMapIcon,
            options: { columns: 2 },
            fields: [
              { name: "key", title: "Key", type: "string" },
              { name: "value", title: "Value", type: "string" },
            ],
            preview: { select: { title: "key", subtitle: "value" } },
          },
        ],
        group: "main",
      },
      {
        name: "clusterItems",
        title: "Cluster Items",
        type: "array",
        of: [
          {
            type: "object",
            title: "Parameter",
            icon: ParameterMapIcon,
            options: { columns: 2 },
            fields: [
              {
                title: "Label Text",
                name: "labelText",
                type: "string",
                // validation: (Rule) => Rule.required(),
              },
              { name: "key", title: "Key", type: "string" },
              { name: "value", title: "Value", type: "string" },
            ],
            preview: { select: { title: "key", subtitle: "value" } },
          },
          {
            name: "url",
            title: "URL",
            type: "link",
          },
        ],
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
