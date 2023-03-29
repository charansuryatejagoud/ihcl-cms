export default {
    title:"Exclusive Offers",
      name: 'exclusiveOffers',
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "string",
        },
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
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [
            { name: "hightlite", type: "string", title: "Highlite"}
          ]
        },
      ],
  }