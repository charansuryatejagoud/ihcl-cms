export default {
  title: "Offer Info",
  name: "offerInfo",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicDetails",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
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
};
