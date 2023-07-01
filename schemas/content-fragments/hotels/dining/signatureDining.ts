export default {
  title: "Signature Dining",
  name: 'signatureDining',
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
        type: 'array',
        of: [{ type: 'media' }]
    },
    {
      name: "diningRooms",
      title: "Dining Rooms",
      type: "array",
      of: [
        { type: "diningDetails" }
      ]
    },
  ],
} 