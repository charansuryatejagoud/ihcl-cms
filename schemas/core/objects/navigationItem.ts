import { IoNavigate as Icon } from "react-icons/io5";
// import { pathUrlRule } from "../../shared-utils";
import { linkTypeField, pathUrlRule } from "../../shared-utils";
const buttonVariants = [
  { title: "Light Contained", value: "light-contained" },
  { title: "Dark Contained", value: "dark-contained" },
  { title: "Light Outlined", value: "light-outlined" },
  { title: "Dark Outlined", value: "dark-outlined" },
  { title: "Link", value: "link" },
  { title: "Link With Back Navigation", value: "link-with-back-navigation" },
];
export function navigationItem() {
  return {
    name: "navigationItem",
    title: "Navigation Item",
    type: "object",
    icon: Icon,
    fields: [
      {
        name: "chooseNavigation",
        title: "Choose Navigation",
        type: "string",
        options: {
          list: [
            { title: "Same", value: "same" },
            { title: "Different", value: "different" },
          ],
          layout: "radio",
        },
        initialValue: "same",
        description: `If you have different Navigation Button in Mobile and Web. Select option - "different"`,
      },
      {
        name: "desktopNavigation",
        title: "Desktop Navigation",
        type: "navigation",
        hidden: ({ parent }) => parent?.chooseNavigation === "same",
      },
      {
        name: "mobileNavigation",
        title: "Mobile Navigation",
        type: "navigation",
        hidden: ({ parent }) => parent?.chooseNavigation === "same",
      },
      {
        name: "title",
        title: "Title",
        type: "string",
        hidden: ({ parent }) => parent?.chooseNavigation === "different",
      },
      {
        name: "url",
        title: "Url",
        type: "string",
        validation: pathUrlRule,
        hidden: ({ parent }) => parent?.chooseNavigation === "different",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        hidden: ({ parent }) => parent?.chooseNavigation === "different",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: [...buttonVariants],
        },
        hidden: ({ parent }) => parent?.chooseNavigation === "different",
      },
      {
        ...linkTypeField({ name: "urlType", title: "Url Type" }),
        hidden: ({ parent }) => parent?.chooseNavigation === "different",
      },
      {
        name: "allowOnHoverProperty",
        title: "Allow OnHover Property",
        type: "boolean",
        hidden: ({ parent }) =>
          // parent?.chooseNavigation === "same" &&
          parent?.chooseNavigation === "different",
      },
      {
        name: "OnHoverField",
        title: "OnHover Field",
        type: "linkOnHover",
        hidden: ({ parent }) => !parent?.allowOnHoverProperty,
        // || parent?.chooseNavigation === "different",
      },
    ],
    preview: {
      select: {
        title: "title",
      },
    },
  };
}

export function navigation() {
  return {
    name: "navigation",
    title: "Navigation",
    type: "object",
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
}
