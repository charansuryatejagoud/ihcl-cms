export default {
  title: "Venues",
  name: "venues",
  type: "document",
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
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "eventVenues",
      title: "Venues and Occasions",
      type: "venuesAndOccasions",
    },
    {
      name: "perfectEventSection",
      title: "Perfect Events",
      type: "object",
      fields: [
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
          name: "perfectEvent",
          title: "Perfect Event Info",
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
    },
    {
      name: "timelessWeddings",
      title: "Timeless Weddings",
      type: "object",
      fields: [
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
          name: "weddingEvents",
          title: "Weddings Events",
          type: "array",
          of: [{ type: "weddingEventInfo" }],
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
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 5,
    }
  ],
};
