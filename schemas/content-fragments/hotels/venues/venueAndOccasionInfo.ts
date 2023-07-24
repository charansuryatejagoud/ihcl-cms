import { seatingStyles } from "../utility";

export default {
  title: "Venue and Occasion Info",
  name: "venueAndOccasionInfo",
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
    { name: "capacity", type: "string", title: "Capacity" },
    {
      name: "seatingStyles",
      title: "Seating Styles",
      type: "array",
      of: [
        {
          name: "style",
          type: "string",
          title: "Style",
          options: {
            list: seatingStyles,
          },
        },
      ],
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
