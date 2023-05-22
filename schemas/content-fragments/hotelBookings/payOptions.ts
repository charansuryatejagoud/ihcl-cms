export default {
    title: "Pay Options",
    name: 'payOptions',
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
          name: "voucherInfo",
          title: "Voucher Details",
          type: "payOptionsDetails",
        },
        {
          name: "giftCardInfo",
          title: "GiftCard Details",
          type: "payOptionsDetails",
        },
        {
          name: "neuCoinsInfo",
          title: "NeuCoins Details",
          type: "payOptionsDetails",
        },
        {
          name: "balanceAmount",
          title: "Balance Amount",
          type: "string",
        }
    ],
}