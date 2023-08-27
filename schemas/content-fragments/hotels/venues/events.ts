import { seatingStyles } from "../utility";

export default {
  title: "Events",
  name: "events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
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
    {
      title: "Venue Modal Details",
      name: "venueModalDetails",
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
