export default {
    title: "SEO Config",
    name: "seoConfig",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "metaTags",
        title: "Meta Tags",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "name",
                title: "Name",
                type: "string",
              },
              {
                name: "content",
                title: "Content",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        name: "scripts",
        title: "Scripts",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "src",
                title: "Src",
                type: "string",
              },
              {
                name: "script",
                title: "Script",
                type: "text",
              },
              {
                name: "type",
                title: "Type",
                type: "string",
              },
              {
                name: "async",
                title: "Async",
                type: "boolean",
              },
              {
                name: "defer",
                title: "Defer",
                type: "boolean",
              },
            ],
          },
        ],
      },
      {
        name: "links",
        title: "Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "rel",
                title: "Rel",
                type: "string",
              },
              {
                name: "href",
                title: "Href",
                type: "string",
              },
              {
                name: "type",
                title: "Type",
                type: "string",
              },
            ],
          },
        ],
      },
      {
        name: "keywords",
        title: "Keywords",
        type: "text",
        rows: 5
      },
    ],
    preview: {
      select: {
        title: "title",
      },
      prepare(selection) {
        const { title } = selection;
        return {
          title: title,
        };
      },
    },
  };
  