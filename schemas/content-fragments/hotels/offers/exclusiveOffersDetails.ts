export default {
  name: "exclusiveOfferDetails",
  title: "Exclusive Offer Details",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicInfo",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        { type: "string" }
      ]
    },
    { name: 'code', type: 'string', title: 'Code' },
    { name: 'type', type: 'string', title: 'Type' },
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