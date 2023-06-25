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
        type: "bannerDetails",
    },
    {
      name: "diningRoomsList",
      title: "Dining Rooms List",
      type: "array",
      of: [
        { type: "diningDetails" }
      ]
    },
  ],
} 