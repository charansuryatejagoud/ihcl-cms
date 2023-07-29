import { IoNavigate as Icon } from "react-icons/io5";
// import { pathUrlRule } from "../../shared-utils";
import { linkTypeField, pathUrlRule } from "../../shared-utils";
import { featureVariants } from "../../constants";
const buttonVariants = [
  { title: "Light Contained", value: "light-contained" },
  { title: "Dark Contained", value: "dark-contained" },
  { title: "Light Outlined", value: "light-outlined" },
  { title: "Dark Outlined", value: "dark-outlined" },
  { title: "Link", value: "link" },
  { title: "Link With Back Navigation", value: "link-with-back-navigation" },
];
export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: Icon,
  initialValue: {
    featureVariant: "default"
  },
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
      validation: pathUrlRule,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "featureVariant",
      title: "Feature Variant",
      type: "string",
      options: {
        list: [...featureVariants]
      }
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [...buttonVariants],
      },
    },
    {
      ...linkTypeField({ name: "urlType", title: "Url Type" }),
    },
    {
      name: "allowOnHoverProperty",
      title: "Allow OnHover Property",
      type: "boolean",
    },
    {
      name: "OnHoverField",
      title: "OnHover Field",
      type: "linkOnHover",
      hidden: ({ parent }) => !parent?.allowOnHoverProperty,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
