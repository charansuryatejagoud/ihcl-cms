export default {
    title:"Highlights",
      name: 'highlights',
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "highlightDetails",
          title: "Highlight Details",
          type: "array",
          of: [
            { type: "highlightDetails" }
          ]
        },
      ],
  }