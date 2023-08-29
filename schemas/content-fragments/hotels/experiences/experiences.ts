export default {
  title: "Experiences",
  name: "experiences",
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
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "signatureExperience",
      title: "Signature Experience",
      type: "basicDetails",
    },
    {
      name: "experienceDetails",
      title: "Experience Details",
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
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "string",
    }
  ],
};
