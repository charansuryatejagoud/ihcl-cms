export default {
  name: "hotel",
  title: "Hotels",
  type: "document",
  fields: [
    {
      name: "propertyId",
      title: "Property Id",
      type: "string",
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
    },
    {
      name: "propertySubType",
      title: "Property Sub Type",
      type: "string",
    },
    {
      name: "propertyDetails",
      title: "Property Details",
      type: "hotelDetails",
    },
    {
      name: "propertyAddress",
      title: "Property Address",
      type: "string",
    },
    {
      name: "propertyContact",
      title: "Property Contact",
      type: "string",
    },
    {
      name: "propertyAvailability",
      title: "Property Availability",
      type: "string",
    },
    {
      name: "propertyFacilities",
      title: "Property Facilities",
      type: "string",
    },
    {
      name: "propertyAwards",
      title: "Property Awards",
      type: "string",
    },
    {
      name: "propertySocialInfo",
      title: "Property Social Info",
      type: "string",
    },
    {
      name: "hotelRooms",
      title: "Hotel Rooms",
      type: "string",
    },
  ],
};
