export default {
  title: "Awards",
  name: 'awards',
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: 'string',
    },
    {
        name: "sectionTitle",
        title: "Section Title",
        type: 'string',
    },
    {
      name: "awardDetails",
      title: "Award Details",
      type: 'array',
      of: [
         {type:"awardDetails"}
      ]
    }
  ],
}