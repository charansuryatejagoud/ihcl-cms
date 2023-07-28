export default {
  title: "Social Info",
  name: "socialInfo",
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
      name: "socialHandle",
      title: "Social Handle",
      type: "string",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
      },
      description: "Used for Showing Social Feeds based on Time Period",
    },
    {
      title: "End Date",
      name: "endDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
      },
      description: "Used for Showing Social Feeds based on Time Period",
    },
  ],
};
