import { IoNavigate as Icon } from "react-icons/io5";
// import { pathUrlRule } from "../../shared-utils";

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
          { title: "Light-Contained", value: "light-contained" },
          { title: "Dark-Contained", value: "dark-contained" },
          { title: "Light-Outlined", value: "light-outlined" },
          { title: "Dark-Outlined", value: "dark-outlined" },
          { title: "Link", value: "link-m" },
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
