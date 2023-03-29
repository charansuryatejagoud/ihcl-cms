export default {
    title:"Offers",
      name: 'offers',
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
        {
          name: "specifications",
          title: "Specifications",
          type: "object",
          fields: [
            { name: 'key', type: 'string', title: 'Key' },
            { name: 'value', type: 'string', title: 'Value' },
          ]
        },
        {
          name: "tags",
          title: "Tags",
          type: "string",
        },
      ],
  } 