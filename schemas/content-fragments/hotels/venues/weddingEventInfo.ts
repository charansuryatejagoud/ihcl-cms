export default {
  title: "Wedding Event Details",
  name: "weddingEventInfo",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicDetails",
    },
    {
      name: "backgroundImage",
      title: "Backgorund Image",
      type: "imageAsset",
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
