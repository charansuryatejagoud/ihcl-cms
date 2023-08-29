export default {
  name: "holidayInfo",
  title: "Holiday Info",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicDetails",
    },
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
