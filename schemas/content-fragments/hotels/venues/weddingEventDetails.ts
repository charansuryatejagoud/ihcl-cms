export default {
    title: "Wedding Event Details",
    name: 'weddingEventDetails',
    type: "object",
    fields: [
        {
            name: "basicInfo",
            title: "Basic Info",
            type: "basicInfo",
        },
        {
            name: "backgroundImage",
            title: "Backgorund Image",
            type: "imageAsset",
        },
    ],
    preview: {
      select: {
        title: 'basicInfo',
        // subtitle: 'releaseDate'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title.title
        }
      }
    }
  }