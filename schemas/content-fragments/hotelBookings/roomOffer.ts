export default {
    title: "Room Offer",
    name: 'roomOffer',
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: 'string'
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
            name: "highlights",
            title: "Highlights",
            type: 'array',
            of: [{
              type: 'string',
            }]
        },
        {
            name: "rates",
            title: "Rates",
            type: 'object',
            fields: [
              {
                name: "id",
                title: "Id",
                type: "string",
              },
              {
                name: "title",
                title: "Title",
                type: "string",
              },
              {
                name: "rate",
                title: "Rate",
                type: "string",
              },
            ]
        },
    ],
}