import { IoApps, IoSettings } from "react-icons/io5";
const cardAssets = [
  {
    title: "Default Card Preview",
    value: "default.card-preview",
  },
  {
    title: "Custom Card Preview",
    value: "custom.card-preview",
  },
];
export default {
  name: "cardAssets",
  title: "Card Assets",
  type: "object",
  groups: [{ name: "main", title: "Main", icon: IoApps }],
  fields: [
    {
      name: "variant",
      title: "Variant",
      type: "string",

      group: "main",
      options: {
        list: [...cardAssets],
      },
    },
    {
      name: "largeVariant",
      title: "Large Variant",
      type: "string",
      options: {
        list: [...cardAssets],
      },

      group: "main",
    },
    {
      name: "image",
      title: " Image",
      type: "image",
      group: "main",
    },
    {
      name: "largeImage",
      title: "Large Image",
      type: "image",
      group: "main",
    },
    {
      name: "imageAssets",
      title: "Image Assets",
      type: "array",
      group: "main",
      of: [
        {
          type: "object",
          groups: [{ name: "main", title: "Main", icon: IoApps }],
          fields: [
            {
              name: "primaryImage",
              title: "Primary Image",
              type: "image",
              group: "main",
            },
            {
              name: "secondaryImage",
              title: "Secondary Image",
              type: "image",
              group: "main",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "image",
      hidden: "isHidden",
    },
  },
};
