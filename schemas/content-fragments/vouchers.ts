export default {
  name: "vouchers",
  type: "document",
  title: "Vouchers",
  fields: [
    {
      name: "voucherName",
      title: "Voucher Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
    },
    {
      name: "productCode",
      title: "Product Code",
      type: "string",
    },
    {
      name: "promoCode",
      title: "Promo Code",
      type: "string",
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
  ],
};
