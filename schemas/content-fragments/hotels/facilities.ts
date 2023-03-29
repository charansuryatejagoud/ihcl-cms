export default {
    title:"Facilities",
      name: 'facilities',
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: 'object',
          fields: [
            {name: 'icon', type: 'string', title: 'Icon'},
            {name: 'text', type: 'string', title: 'Text'},
          ]
        },
        {
          name: "info",
          title: "Info",
          type: "string",
        },
        {
          name: "moreInfo",
          title: "More Info",
          type: "string",
        },
      ],
  }