export default {
  title: "Highlights",
  name: "highlights",
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
      type: "title",
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
        {
          type: "object",
          fields: [
            {
              name: "basicInfo",
              title: "Basic Info",
              type: "basicDetails",
            },
          ],
          preview: {
            select: {
              title: "basicInfo",
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: title.title,
              };
            },
          },
        },
      ],
    },
  ],
};
