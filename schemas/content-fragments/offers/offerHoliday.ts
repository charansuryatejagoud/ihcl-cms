export default {
    name: "offerHolidays",
    title: "Offer Holidays",
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
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "thumbnail",
        title: "Thumbnail",
        type: "array",
        of: [{ type: "mediaInput" }],
      },
      {
        name: "bannerInfo",
        title: "Banner Info",
        type: "tabInfo",
      },
      {
        name: "participatingOffers",
        title: "Participating Offers",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "offerPackages" }],
          },
        ],
      }
    ],
  };
  