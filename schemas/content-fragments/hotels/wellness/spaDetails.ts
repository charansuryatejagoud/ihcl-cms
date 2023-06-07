export default {
    title:"Spa Details",
      name: 'spaDetails',
      type: "object",
      fields: [
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
            name: "spaInfo",
            title: "Spa Info",
            type: 'object',
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
                  name: "image",
                  title: "Image",
                  type: "image",
                },
            ]
        },
      ],
  }