export default {
  title: "Gift Cards Details",
  type: "document",
  name: "giftCardsDetails",
  fields: [
    {
      title: "SKU",
      type: "string",
      name: "sku",
    },
    {
      title: "Name",
      type: "string",
      name: "name",
    },
    {
      title: "Currency",
      type: "object",
      name: "currency",
      fields: [
        { title: "Code", type: "string", name: "code" },
        { title: "Numeric Code", type: "string", name: "numericCode" },
        { title: "Symbol", type: "string", name: "symbol" },
      ],
    },
    {
      title: "URL",
      type: "url",
      name: "url",
    },
    {
      title: "Minimum Price",
      type: "string",
      name: "minPrice",
    },
    {
      title: "Maximum Price",
      type: "string",
      name: "maxPrice",
    },
    {
      title: "Price",
      type: "object",
      name: "price",
      fields: [
        {
          title: "cpg",
          type: "array",
          name: "cpg",
          of: [{ title: "cpgID", type: "string", name: "cpgId" }],
        },
      ],
    },
    {
      title: "Images",
      type: "object",
      name: "images",
      fields: [
        {
          title: "Thumbnail",
          type: "string",
          name: "thumbnail",
          description: "Thumbnail image",
        },
        {
          title: "Mobile",
          type: "string",
          name: "mobile",
          description: "image is used for mobile view",
        },
        {
          title: "Base",
          type: "string",
          name: "base",
          description: "Base image",
        },
        {
          title: "Small",
          type: "string",
          name: "small",
          description: "Small image",
        },
      ],
    },
  ],
};
