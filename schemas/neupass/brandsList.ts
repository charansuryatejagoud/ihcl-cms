import { BsListStars as Icon } from "react-icons/bs";

export default {
  name: "neupass.brandsList",
  title: "[NeuPass] Brands List",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      title: "Brands",
      name: "brands",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "brand" }],
        },
      ],
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "default ", value: "default" },
          { title: "As Cards", value: "cards" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "variant",
    },
  },
};
