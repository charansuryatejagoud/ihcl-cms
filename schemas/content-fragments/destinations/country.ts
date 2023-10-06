export default {
  name: "country",
  title: "Countries",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "bannerInfo",
      title: "Banner Info",
      type: "tabInfo",
    },
    {
      name: "hotelsTab",
      title: "Hotels Tab",
      type: "tabInfo",
    },
    {
      name: "participatingDestinations",
      title: "Participating Destinations",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "destination" }],
        },
      ],
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
