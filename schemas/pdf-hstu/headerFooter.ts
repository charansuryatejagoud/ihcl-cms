export default {
  name: "header-footer",
  title: "[HSTU PDF] Header-Footer",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "blockContent",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
};
