export default {
    title:"Exclusive Offers",
      name: 'exclusiveOffers',
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
            type: 'title',
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "exclusiveOfferDetails",
          title: "Exclusive Offer Details",
          type: "array",
          of: [
            { type: "exclusiveOfferDetails" }
          ]
        },
      ],
  }