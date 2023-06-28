export default {
  name: "hotel",
  title: "Hotels",
  type: "document",
  fields: [
    {
      name: "hotelName",
      title: "Hotel Name",
      type: "string",
    },
    {
      name: "hotelId",
      title: "Hotel Id",
      type: "string",
    },
    {
      name: "hotelType",
      title: "Hotel Type",
      type: "string",
    },
    {
      name: "hotelSubType",
      title: "Hotel Sub Type",
      type: "string",
    },
    {
      name: "hotelOverview",
      title: "Hotel Overview",
      type: 'reference',
      to: [{type: "hotelOverview" }]
    },
    {
      name: "hotelAddress",
      title: "Hotel Address",
      type: 'reference',
      to: [{type: "address" }]
    },
    {
      name: "hotelContact",
      title: "Hotel Contact",
      type: 'reference',
      to: [{type: "contact" }]
    },
    {
      name: "hotelAvailability",
      title: "Hotel Availability",
      type: 'reference',
      to: [{type: "availability" }]
    },
    {
      name: "hotelFacilities",
      title: "Hotel Facilities",
      type: 'reference',
      to: [{type: "facilities" }]
    },
    {
      name: "hotelAwards",
      title: "Hotel Awards",
      type: 'reference',
      to: [{type: "awards" }]
    },
    {
      name: "hotelSocialInfo",
      title: "Hotel Social Info",
      type: 'reference',
      to: [{type: "socialInfo" }]
    },
    {
      name: "hotelRooms",
      title: "Hotel Rooms",
      type: 'reference',
      to: [{type: "rooms" }]
    },
    {
      name: "hotelHighlights",
      title: "Hotel Highlights",
      type: 'reference',
      to: [{type: "highlights" }]
    },
    {
      name: "hotelExclusiveOffersDining",
      title: "Hotel Exclusive Offers(Dining)",
      type: 'reference',
      to: [{type: "exclusiveOffers" }]
    },
    {
      name: "hotelExclusiveOffersWellness",
      title: "Hotel Exclusive Offers(Wellness)",
      type: 'reference',
      to: [{type: "exclusiveOffers" }]
    },
    {
      name: "hotelOffers",
      title: "Hotel Offers",
      type: 'reference',
      to: [{type: "offers" }]
    },
    {
      name: "hotelHolidays",
      title: "Hotel Holidays",
      type: 'reference',
      to: [{type: "holidays" }]
    },
    {
      name: "hotelSignatureDining",
      title: "Hotel Signature Dining",
      type: 'reference',
      to: [{type: "signatureDining" }]
    },
    {
      name: "hotelEventVenues",
      title: "Hotel Event Venues",
      type: 'reference',
      to: [{type: "venues" }]
    },
    // {
    //   name: "hotelPerfectEvent",
    //   title: "Hotel Perfect Event",
    //   type: 'reference',
    //   to: [{type: "perfectEvent" }]
    // },
    // {
    //   name: "hotelSpaDetails",
    //   title: "Hotel Spa Details",
    //   type: 'reference',
    //   to: [{type: "spaDetails" }]
    // },
    // {
    //   name: "hotelSignatureTreatments",
    //   title: "Hotel Signature Treatments",
    //   type: 'reference',
    //   to: [{type: "signatureTreatments" }]
    // },
    {
      name: "hotelWellness",
      title: "Hotel Wellness",
      type: 'reference',
      to: [{type: "wellness" }]
    },
    {
      name: "hotelExperiences",
      title: "Hotel Experiences",
      type: 'reference',
      to: [{type: "experiences" }]
    },
    {
      name: "hotelGallery",
      title: "Hotel Gallery",
      type: 'reference',
      to: [{type: "gallery" }]
    },
    {
      name: "hotelAttractions",
      title: "Hotel Attractions",
      type: 'reference',
      to: [{type: "attractions" }]
    },
  ],
};
