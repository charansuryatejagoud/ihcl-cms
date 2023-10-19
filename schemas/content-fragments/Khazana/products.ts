export default {
  title: "Products",
  name: "products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "array",
      of: [{ type: "mediaInput" }],
    },

    {
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          name: "productCategory",
          title: "Product Category",
          type: "object",
          fields: [
            {
              name: "categoryTitle",
              title: "Category Title",
              type: "string",
            },
            {
              name: "identifier",
              title: "Identifier",
              type: "string",
            },
            {
              name: "productItems",
              title: "Product Items",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{type: "productDetail"}],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      rows: 3,
    },
    {
      name: "bannerTitle",
      title: "Banner Title",
      type: "title",
    },
    {
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
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
    },
  ],
};
