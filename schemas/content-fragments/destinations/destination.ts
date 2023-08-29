export default {
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "destinationURL",
      title: "URL",
      type: "string",
    },
    {
      name: "bannerTitle",
      title: "Banner Title",
      type: "title",
    },
    {
      name: "hotelsTab",
      title: "Hotels Tab",
      type: "tabInfo",
    },
    {
      name: "offers",
      title: "Offers",
      type: "tabInfo",
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "reference",
      to: [{ type: "highlights" }],
    },
    {
      name: "aboutDestination",
      title: "About Destination",
      type: "reference",
      to: [{ type: "about" }],
    },
    {
      name: "diningTab",
      title: "Dining",
      type: "tabInfo",
    },
    {
      name: "experiencesTab",
      title: "Experiences",
      type: "tabInfo",
    },
    {
      name: "spaTab",
      title: "Spa",
      type: "tabInfo",
    },
    {
      name: "treatments",
      title: "Treatments",
      type: "tabInfo",
    },
    {
      name: "holidaysTab",
      title: "Holidays",
      type: "tabInfo",
    },
    {
      name: "featuredHolidays",
      title: "Featured Holidays",
      type: "tabInfo",
    },
    {
      name: "journeys",
      title: "Journeys",
      type: "tabInfo",
    },
    {
      name: "participatingHotels",
      title: "Participating Hotels",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "hotel" }],
        },
      ],
    },
  ],
};
