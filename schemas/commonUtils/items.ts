export default {
  name: "items",
  title: "Items",
  type: "object",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "When there is a Link available in the content use this field instead of Text",
    },
  ],
};
