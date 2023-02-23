import { IoNavigate as Icon } from "react-icons/io5";
// import { pathUrlRule } from "../../shared-utils";
const buttonVariants = [
  { title: "Light Contained", value: "buttonVariants.light-contained" },
  { title: "Dark Contained", value: "buttonVariants.dark-contained" },
  { title: "Light Outlined", value: "buttonVariants.light-outlined" },
  { title: "Dark Outlined", value: "buttonVariants.dark-outlined" },
  { title: "Link", value: "buttonVariants.link" },
]
export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
      // validation: pathUrlRule,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          ...buttonVariants
        ],
      },
    },
    {
      title: "Check Box",
      name: "checkBox",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
          { title: "Dialog", value: "dialog" },
        ],
        layout: "radio",
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
