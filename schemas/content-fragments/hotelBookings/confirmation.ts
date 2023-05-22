export default {
    title: "Confirmation",
    name: 'confirmation',
    type: "object",
    fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "itinerary",
          title: "Itinerary",
          type: 'array',
          of: [{
            type: 'reference',
            to: { type: "itinerary" }
          }]
        },
        {
          name: "roomOfferDetails",
          title: "Room Offer Details",
          type: 'array',
          of: [{
            type: 'reference',
            to: { type: "roomOfferDetails" }
          }]
        },
        {
          name: "addInfo",
          title: "Additional Info",
          type: 'array',
          of: [{
            type: 'string'
          }]
        }
    ],
}