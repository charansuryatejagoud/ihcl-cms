export default {
  title: "UI Configuration",
  name: "uiConfiguration",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "color",
    },
    {
      name: "titleColor",
      title: "Title Color",
      type: "color",
    },
    {
      name: "padding",
      title: "Padding",
      type: "object",
      fields: [
        {
          name: "mobile",
          title: "Mobile",
          type: "string",
        },
        {
          name: "desktop",
          title: "Desktop",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      padding: "padding",
    },
    prepare({ title, padding }) {
      return {
        title: `${title ? title : padding?.desktop ?? "<UI Config>"}`,
        subtitle: `Desktop: ${padding?.desktop ?? " - "} | Mobile: ${
          padding?.mobile ?? " - "
        }`,
      };
    },
  },
};
