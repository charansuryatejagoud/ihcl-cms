export default {
  title: "Restaurants",
  name: "restaurants",
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
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "restaurantDetails",
      title: "Restaurant Details",
      type: "restaurantDetails",
    },
    {
      name: "restaurantAvailability",
      title: "Restaurant Availability",
      type: "array",
      of: [{ type: "facilityInfo" }],
    },
    {
      name: "RestaurantHighlights",
      title: "Restaurant Highlights",
      type: "reference",
      to: [{ type: "highlights" }],
    },
  ],
};
