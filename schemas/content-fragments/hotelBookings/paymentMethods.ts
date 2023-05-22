export default {
    title: "Payment Methods",
    name: 'paymentMethods',
    type: "object",
    fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "subTitle",
          title: "Title",
          type: "string",
        },
        {
          name: "payments",
          title: "Payments",
          type: 'array',
          of: [{
            type: 'reference',
            to: { type: "payment" }
          }]
        },
        {
          name: "terms",
          title: "Terms",
          type: 'array',
          of: [{
            type: 'string'
          }]
        },
    ],
}