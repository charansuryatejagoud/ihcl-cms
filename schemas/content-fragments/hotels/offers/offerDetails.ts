export default {
  title: "Offer Details",
  name: 'offerDetails',
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicInfo"
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        { type: "string" }
      ]
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }]
    },
  ],
  preview: {
    select: {
      title: 'basicInfo',
      // subtitle: 'releaseDate'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title.title
      }
    }
  }
} 