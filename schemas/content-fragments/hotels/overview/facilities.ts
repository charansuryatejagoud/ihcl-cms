export default {
  title: "Facilities",
  name: 'facilities',
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: 'string',
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: 'title',
    },
    {
      name: "info",
      title: "Info",
      type: "string",
    },
    {
      name: "facilityDetails",
      title: "Facility  Details",
      type: "array",
      of: [
        { type: "facilityDetails" }
      ]
    },
  ],
}