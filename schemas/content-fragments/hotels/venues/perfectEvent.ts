export default {
  title: "Perfect Event",
  name: 'perfectEvent',
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        { name: 'image', type: 'image', title: 'Image' },
      ]
    },
  ],
}