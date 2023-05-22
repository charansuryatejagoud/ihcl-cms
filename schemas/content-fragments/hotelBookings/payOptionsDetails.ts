export default {
    title: "Pay Options Details",
    name: 'payOptionsDetails',
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
          name: "redeemInfo",
          title: "Redeem Info",
          type: "object",
          fields: [
            {
              name: "balanceInfo",
              title: "Balance Info",
              type: "string",
            },
            {
              name: "redeemAllCheck",
              title: "Redeem AllCheck",
              type: "string",
            },
            {
              name: "primaryButton",
              title: "Primary Button",
              type: "string",
            },
          ]
        },
        {
          name: "redeemedInfo",
          title: "Redeemed Info",
          type: "object",
          fields: [
            {
              name: "redeemedMsg",
              title: "Redeemed Message",
              type: "string",
            },
            {
              name: "redeemedLabel",
              title: "Redeemed Label",
              type: "string",
            },
            {
              name: "secondaryButton",
              title: "Secondary Button",
              type: "string",
            }
          ]
        },
        
    ],
}