export default {
  title: "Offers",
  name: 'offers',
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
      type: 'title',
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
    },
    {
      name: "offerDetails",
      title: "Offer Details",
      type: "array",
      of: [
        { type: "offerDetails" }
      ]
    },
  ],
} 