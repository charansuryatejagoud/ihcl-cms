export default {
    title:"Awards",
      name: 'awards',
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
          type: "text",
        },
      ],
  }