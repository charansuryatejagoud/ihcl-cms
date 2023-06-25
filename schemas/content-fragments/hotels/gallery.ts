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
        type: "bannerDetails",
    },
    {
      name: "hotelImages",
      title: "Hotel Images",
      type: 'array',
      of: [{ name: "hotelImage", type: "image", title: "Hotel Image" }]
    },
  ],
}