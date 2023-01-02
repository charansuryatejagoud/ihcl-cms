import { GoTextSize as Icon } from "react-icons/go";
import { IoApps, IoSettings } from "react-icons/io5";

export default {
  name: "typography",
  title: "Typography",
  type: "object",
  icon: Icon,
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      name: "value",
      title: "Value",
      type: "string",
      group: "main",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      group: "main",
    },
    {
      name: "weight",
      title: "Font Weight",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Bold", value: "bold" },
        ],
      },
      group: "main",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Heading XL", value: "heading-xl" },
          { title: "Heading L", value: "heading-l" },
          { title: "Heading M", value: "heading-m" },
          { title: "Heading S", value: "heading-s" },
          { title: "Body L", value: "body-l" },
          { title: "Body M", value: "body-m" },
          { title: "Body S", value: "body-s" },
          { title: "Small", value: "small" },
          { title: "Link M", value: "link-m" },
          { title: "Link S", value: "link-s" },
        ],
      },
      group: "main",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
      group: "configuration",
    },
  ],
  preview: {
    select: {
      title: "variant",
      subtitle: "weight",
    },
  },
};
