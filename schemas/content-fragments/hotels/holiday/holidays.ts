export default {
  title: "Holidays",
  name: "holidays",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "title",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "holidayDetails",
      title: "Holiday Details",
      type: "array",
      of: [{ type: "holidayInfo" }],
    },
  ],
};
