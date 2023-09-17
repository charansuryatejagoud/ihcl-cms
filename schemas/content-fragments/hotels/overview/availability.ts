export default {
  title: "Availability",
  name: "availability",
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
      name: "checkinTime",
      title: "Checkin Time",
      type: "string",
    },
    {
      name: "checkoutTime",
      title: "Checkout Time",
      type: "string",
    },
    {
      name: "roomsInfo",
      title: "Rooms Info",
      type: "string",
    },
    {
      name: "diningInfo",
      title: "Dining Info",
      type: "string",
    },
    {
      name: "wellnessInfo",
      title: "Wellness Info",
      type: "string",
    },
    {
      name: "temperatureInfo",
      title: "Temperature Info",
      type: "string",
    },
    {
      name: "hotelEssentialInfo",
      title: "Hotel Essential Info",
      type: "string",
    },
    {
      name: "hotelInfo",
      title: "Hotel Information",
      type: "array",
      of: [{ type: "facilityInfo" }],
    },
  ],
};
