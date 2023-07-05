import { MdViewHeadline } from "react-icons/md";
const headerVariants = [
  {
    title: "Default Header",
    value: "default-header",
  },
  {
    title: "Custom Header",
    value: "custom-header",
  },
];
export default {
  title: "Header",
  name: "header",
  type: "document",
  icon: MdViewHeadline,
  initialValue: {
    variant: "default",
  },

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [...headerVariants],
      },
    },
    {
      title: "Path",
      name: "path",
      type: "string",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Secondary Logo",
      name: "secondaryLogo",
      type: "image",
    },
    {
      title: "Nav Items",
      name: "navItems",
      type: "array",
      of: [{ type: "navigationItem" }],
    },
    {
      name:"dropDownList",
      title:"Drop Down list",
      type:"array",
      of:[
        {
          type:"formGroup"
        }
      ]
    },
    {
      title: "Login List",
      name: "loginList",
      type: "array",
      of: [{ type: "navigationItem" }],
    },
    {
      title: "Cart Icon",
      name: "cartIcon",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Primary Cart Icon",
              name: "primaryCartIcon",
              type: "image",
            },
            {
              title: "Secondary Cart Icon",
              name: "secondaryCartIcon",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title: "Profile Icon",
      name: "profileIcon",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "primaryProfileIcon",
              title: "Primary Profile Icon",
              type: "image",
            },
            {
              name: "secondaryProfileIcon",
              title: "Secondary Profile Icon",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title:"Primary Hamburger Logo",
      name:"primaryHamburgerLogo",
      type:"image"
    },
    {
      title:"Secondary Hamburger Logo",
      name:"secondaryHamburgerLogo",
      type:"image"
    },

    {
      name: "primaryAction",
      title: "Primary Action",
      type: "navigationItem",
    },
    {
      name: "secondaryAction",
      title: "Secondary Action",
      type: "navigationItem",
    },
  ],
};
