export default {
  name: "cugOffers",
  title: "CUG Offers",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "title",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "bankLogo",
      title: "Bank Logo",
      type: "images",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
    },
    {
      name: "discountInfo",
      title: "Discount Info",
      type: "array",
      of: [{ type: "basicDetails" }],
    },
    {
      name: "vouchersInfo",
      title: "Vouchers Info",
      type: "array",
      of: [{ type: "basicDetails" }],
    },
  ],
};
