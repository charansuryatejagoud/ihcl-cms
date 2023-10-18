import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoSend as Icon,
  IoSettings,
} from "react-icons/io5";
import { inputFieldTypes } from "../constants";

export default {
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
      title: "Label Text",
      name: "labelText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Input Field Type",
      name: "inputFieldType",
      type: "string",
      options: {
        list: [...inputFieldTypes],
      },
    },
    {
      title: "Hint Text",
      name: "hintText",
      type: "string",
      hidden: ({ parent }) =>
        parent?.inputFieldType == "terms-and-conditions-checkbox",
    },
    {
      title: "Helper Text",
      name: "helperText",
      type: "string",
      hidden: ({ parent }) =>
        parent?.inputFieldType == "terms-and-conditions-checkbox",
    },
    { title: "Error Text", name: "errorText", type: "string" },
    {
      title: "Is Input Field Read Only?",
      name: "readOnly",
      type: "boolean",
      hidden: ({ parent }) =>
        parent?.inputFieldType == "terms-and-conditions-checkbox",
    },
    {
      title: "Max Width",
      name: "fieldMaxWidth",
      type: "number",
      hidden: ({ parent }) =>
        parent?.inputFieldType == "terms-and-conditions-checkbox",
    },
    {
      title: "Max Length",
      name: "maxLength",
      type: "string",
      description: "Number of characters allow for the input component",
      hidden: ({ parent }) =>
        parent?.inputFieldType == "terms-and-conditions-checkbox",
    },
    { title: "Prefix Icon", name: "prefixIcon", type: "image" },
    { title: "Suffix Icon", name: "suffixIcon", type: "image" },
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
    {
      title: "Check Box List",
      name: "checkBoxList",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Value",
              name: "value",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      title: "Content",
      name: "content",
      type: "blockContent",
      description: "Helper Text for the Checkbox",
      hidden: ({ parent }) =>
        parent?.inputFieldType !== "terms-and-conditions-checkbox",
    },
  ],
  preview: {
    select: {
      title: "labelText",
      subtitle: "inputFieldType",
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
