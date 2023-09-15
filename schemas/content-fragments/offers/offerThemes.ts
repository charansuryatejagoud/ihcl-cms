export default {
    name: "offerThemes",
    title: "Offer Themes",
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
        name: "thumbnail",
        title: "Thumbnail",
        type: "array",
        of: [{ type: "mediaInput" }],
      }
    ],
  };
  