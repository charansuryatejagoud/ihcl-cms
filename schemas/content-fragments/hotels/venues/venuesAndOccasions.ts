export default {
  title: "Venues and Occasions",
  name: "venuesAndOccasions",
  type: "object",
  fields: [
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
      name: "eventVenueDetails",
      title: "Venue and Occasion Info",
      type: "array",
      of: [{ type: "venueAndOccasionInfo" }],
    },
  ],
};
