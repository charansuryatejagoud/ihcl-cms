export default {
  name: "roomInfo",
  title: "Room Info",
  type: "object",
  fields: [
    {
      name: "basicInfo",
      title: "Basic Info",
      type: "basicDetails",
    },
    { name: "roomCode", type: "string", title: "Room Code" },
    { name: "type", type: "string", title: "Type" },
    {
      name: "rateCodeList",
      title: "Rate Code List",
      type: "array",
      of: [
        {
          name: "rateCode",
          title: "Rate Code",
          type: "reference",
          to: [{ type: "rateCodes" }],
        },
      ],
    },
    {
      title: "Room Modal Details",
      name: "roomModalDetails",
      type: "modalDetails",
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
