export default {
  title: "Gift Cards",
  type: "document",
  name: "giftCardsDetails",
  initialValue: {
    isPhysicalGIftCard: false,
  },
  fields: [
    {
      title: "SKU",
      type: "string",
      name: "sku",
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "giftCardGroup" }],
    },
    {
      title: "Name",
      type: "string",
      name: "name",
    },
    {
      title: "Description",
      type: "string",
      name: "description",
    },
    {
      title: "Is Physical GIft Card",
      type: "boolean",
      name: "isPhysicalGIftCard",
    },
    {
      title: "Font Color",
      name: "fontColor",
      type: "color",
      description:
        "Field Used for Gift Card Preview Title and Description Font Colors",
    },
    {
      title: "Banner Image",
      type: "images",
      name: "bannerImage",
    },
    {
      title: "Card Preview",
      type: "object",
      name: "cardPreview",
      fields: [
        {
          title: "Front Image",
          type: "images",
          name: "frontImage",
        },
        {
          title: "Back Image",
          type: "images",
          name: "backImage",
        },
      ],
    },
    {
      title: "Base",
      type: "images",
      name: "base",
      description: "This is used for Image Front Side only",
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
      type: "string",
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
  ],
};
