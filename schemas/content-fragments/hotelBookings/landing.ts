export default {
    title: "Landing",
    name: 'landing',
    type: "object",
    fields: [
        {
          name: "roomId",
          title: "Room Id",
          type: "string",
        },
        {
            name: "rooms",
            title: "Rooms",
            type: 'roomInfo'
        },
        {
            name: "roomOffers",
            title: "Room Offers",
            type: 'array',
            of: [{
              type: 'reference',
              to: { type: "roomOffer" }
            }]
        },
    ],
}