export default {
  title: "Signature Dining",
  name: "signatureDining",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "title",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "diningRooms",
      title: "Dining Rooms",
      type: "array",
      of: [{ type: "diningInfo" }],
    },
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 5,
    }
  ],
};
