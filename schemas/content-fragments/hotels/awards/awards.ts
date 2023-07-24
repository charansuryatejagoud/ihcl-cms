export default {
  title: "Awards",
  name: "awards",
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
      name: "awardDetails",
      title: "Award Details",
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