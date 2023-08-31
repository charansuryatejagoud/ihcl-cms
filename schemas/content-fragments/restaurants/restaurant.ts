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
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "bannerTitle",
      title: "Banner Title",
      type: "title",
    },
    {
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "openingHours",
      title: "Opening Hours",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "hotelDetailDiningPage",
      title: "Hotel Detail Dining Page",
      type: "object",
      fields: [
        {
          name: "bannerSubTitle",
          title: "Banner Sub Title",
          type: "string",
        },
        {
          name: "bannerDiningInfo",
          title: "Banner Dining Info",
          type: "blockContent",
        },
        {
          name: "restaurantInfo",
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
          name: "restaurantContact",
          title: "Contact",
          type: "reference",
          to: [{ type: "contact" }],
        },
        {
          name: "restaurantAddress",
          title: "Address",
          type: "reference",
          to: [{ type: "address" }],
        },
        {
          name: "privateDiningInfo",
          title: "Private Dining Info",
          type: "object",
          fields:[
            {
              name:'diningInfo',
              title:'Dining Info',
              type:'basicDetails'
            },
            {
              name:'contactInfo',
              title:'Contact Info',
              type:'blockContent'
            },
          ]
        },
        {
          name: "locationBasedRestaurants",
          title: "Location Based Restaurants",
          type: "restaurantDetails",
        },
      ],
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
    {
      name: "restaurantBrandPage",
      title: "Restaurant Brand Page",
      type: "object",
      fields: [
        {
          name: "introSection",
          title: "Intro Section",
          type: "restaurantDetails",
        },
        {
          name: "restaurantHighlights",
          title: "Restaurant Highlights",
          type: "reference",
          to: [{ type: "highlights" }],
        },
        {
          name: "locationsSection",
          title: "Locations Section",
          type: "restaurantDetails",
        },
        {
          name: "otherBrandsSection",
          title: "Other Brands Section",
          type: "restaurantDetails",
        },
      ],
    },
  ],
};
