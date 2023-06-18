export default {
  title: "Event Venues",
  name: 'eventVenues',
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: 'title',
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "eventVenueDetails",
      title: "Event Venue Details",
      type: "array",
      of: [
        { type: "eventVenueDetails" }
      ]
    },
  ],
}