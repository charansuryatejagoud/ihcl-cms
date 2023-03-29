export default {
    title:"Gallery",
      name: 'gallery',
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "string",
        },
        {
          name: "Category",
          title: "Category",
          type: 'array',
          of: [
            {
                name: "title",
                title: "Title",
                type: "object",
                fields: [
                    { name: 'title', type: 'string', title: 'Title'},
                ]
            },
            {
                name: "images",
                title: "Images",
                type: "object",
                fields: [
                    { name: 'image', type: 'image', title: 'Image' },
                    { name: 'type', type: 'string', title: 'Type' },
                ]
            },
          ]
        },
      ],
  }