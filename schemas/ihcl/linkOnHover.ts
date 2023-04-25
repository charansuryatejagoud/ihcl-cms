import { IoApps, IoLink as Icon, IoSettings } from "react-icons/io5";
import { linkTypeField, pathUrlRule } from "../shared-utils";

const buttonVariants = [
  { title: "Light Contained", value: "light-contained" },
  { title: "Dark Contained", value: "dark-contained" },
  { title: "Light Outlined", value: "light-outlined" },
  { title: "Dark Outlined", value: "dark-outlined" },
  { title: "Link", value: "link" },
];

export default {
  name: "linkOnHover",
  title: "Link On Hover",
  type: "object",
  icon: Icon,
  groups: [{ name: "main", title: "Main", icon: IoApps }],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
      validation: pathUrlRule,
    },
    {
      ...linkTypeField({ name: "urlType", title: "Url Type" }),
    },
    {
      name: "image",
      title: "Image",
      description: "Image that will be used for smaller screens like Mobile",
      type: "image",
      group: "main",
    },
    {
      name: "largeImage",
      title: "Large Image",
      description: "Image that will be used for larger screens like Desktop",
      type: "image",
      group: "main",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [...buttonVariants],
      },
    },
  ],
};
