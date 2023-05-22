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
      type: 'string',
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
      name: "diningRoomsList",
      title: "Dining Rooms List",
      type: "array",
      of: [
        { type: "diningDetails" }
      ]
    },
  ],
} 