import { galleryCategories } from "../../../constants";

export default {
  title: "Gallery",
  name: "gallery",
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
      name: "hotelMedia",
      title: "Hotel Media",
      type: "array",
      of: [
        {
          name: "mediaDetails",
          title: "Media Details",
          type: "object",
          fields: [
            {
              title: "Category",
              name: "category",
              type: "string",
              options: {
                list: galleryCategories,
              },
            },
            {
              title: "Category Title",
              name: "categoryTitle",
              type: "string",
            },
            {
              title: "Images",
              name: "images",
              type: "array",
              of: [{ type: "image" }],
              hidden: ({ parent }) => parent?.category == "video",
            },
            {
              title: "Videos",
              name: "videos",
              type: "array",
              of: [{ type: "videoAsset" }],
              hidden: ({ parent }) => parent?.category !== "video",
            },
          ],
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
