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
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: "address" }
      }]
    },
    {
      name: "propertyContact",
      title: "Property Contact",
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: "contact" }
      }]
    },
    {
      name: "propertyAvailability",
      title: "Property Availability",
      type: "availability",
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
      type: "rooms",
    },
    {
      name: "propertyHighlights",
      title: "Property Highlights",
      type: "highlights",
    },
    {
      name: "propertyExclusiveOffers",
      title: "Property Exclusive Offers",
      type: "exclusiveOffers",
    },
    {
      name: "propertyOffers",
      title: "Property Offers",
      type: "offers",
    },
    {
      name: "propertyHolidays",
      title: "Property Holidays",
      type: "holidays",
    },
    {
      name: "propertySignatureDining",
      title: "Property Signature Dining",
      type: "signatureDining",
    },
    {
      name: "propertyEventVenues",
      title: "Property Event Venues",
      type: "eventVenues",
    },
    {
      name: "propertyPerfectEvent",
      title: "Property Perfect Event",
      type: "perfectEvent",
    },
    {
      name: "propertySpaDetails",
      title: "Property Spa Details",
      type: "spaDetails",
    },
    {
      name: "propertySignatureTreatments",
      title: "Property Signature Treatments",
      type: "signatureTreatments",
    },
    {
      name: "propertyWellness",
      title: "Property Wellness",
      type: "wellness",
    },
    {
      name: "propertyExperiences",
      title: "Property Experiences",
      type: "experiences",
    },
    {
      name: "propertyGallery",
      title: "Property Gallery",
      type: "gallery",
    }
  ],
};
