export default {
  name: "diningInfo",
  title: "Dining Info",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicDetails",
    },
    { name: "url", type: "string", title: "URL" },
    { name: "code", type: "string", title: "Code" },
    { name: "type", type: "string", title: "Type" },
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
