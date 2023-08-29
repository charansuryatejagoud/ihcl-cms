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
                type: "text",
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
                type: "text",
              },
              {
                name: "script",
                title: "Script",
                type: "text",
              },
              {
                name: "type",
                title: "Type",
                type: "text",
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
                title: "Name",
                type: "text",
              },
              {
                name: "href",
                title: "Href",
                type: "text",
              },
              {
                name: "type",
                title: "Type",
                type: "text",
              },
            ],
          },
        ],
      },
      {
        name: "keywords",
        title: "Keywords",
        type: "array",
        of: [{ type: "string" }],
        options: {
          layout: "tags",
        },
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
  