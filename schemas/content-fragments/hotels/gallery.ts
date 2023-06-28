import { galleryCategories } from "../../constants";

export default {
  title: "Gallery",
  name: 'gallery',
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "media",
    },
    {
      name: "hotelImages",
      title: "Hotel Images",
      type: 'array',
      of: [{
        name: "mediaDetails",
        title: "Media Details",
        type: "object",
        fields: [
          {
            title: 'Category',
            name: 'category',
            type: 'string',
            options: {
              list: galleryCategories
            }
          },
          {
            title: 'Media',
            name: 'media',
            type: 'media'
          }
        ]
      }]
    },
  ],
}