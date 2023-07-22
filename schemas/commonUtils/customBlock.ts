import { linkTypeField } from "../shared-utils";

export default {
  name: "test",
  title: "Test",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "string" }],
      description: "It is used for strong color titles",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      description: "It is used for light color titles",
    },
    {
      name: "navigationItem",
      title: "Navigation Item",
      type: "array",
      of:[{
        type:"object",
        fields: [
            {
              name: "title",
              title: "Title",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
            {
              ...linkTypeField({ name: "urlType", title: "Url Type" }),
            },
            {
                name:"content",
                title:'Content',
                type:"blockContent"
            }
          ],
    },
]
},
    {
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      description: "It is used for multiple bullet points",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
                name: "subTitle",
                title: "Sub Title",
                type: "array",
                of: [
                  {
                    type: "string",
                  },
                ],
              },
          ],
        },
      ],
    },
    {
      name: "textLinks",
      title: "Text Links",
      type: "array",
      description: "This is used for text in between links",
      row: 3,
      of: [
        {
          type: "object",
          fields: [
            {
              name: "primaryText",
              title: "Primary Text",
              type: "string",
            },
            {
              name: "navigation",
              title: "Navigation",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                    },
                    {
                      ...linkTypeField({ name: "urlType", title: "Url Type" }),
                    },
                  ],
                },
              ],
            },
            {
              name: "secondaryText",
              title: "Secondary Text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
    }


