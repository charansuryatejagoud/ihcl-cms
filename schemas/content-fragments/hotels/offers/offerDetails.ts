export default {
    title:"Offer Details",
      name: 'offerDetails',
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        { name: 'subTitle', type: 'string', title: 'Sub Title' },
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
            { type: "string"}
          ]
        },
        {
          name: "specifications",
          title: "Specifications",
          type: "array",
          of: [{ type: "specifications" }]
        },
        {
          name: "tags",
          title: "Tags",
          type: "array",
          of: [{ type: "string" }]
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                { name: 'roomImage', type: 'image', title: 'Room Image' },
            ]
        },
      ],
  } 