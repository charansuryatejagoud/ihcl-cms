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
      title: "Promocode",
      type: "string",
    },
    {
      name: "rateCode",
      title: "Rate Code",
      type: "string",
    },
    {
      name: "banner",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "array",
      of: [{ type: "mediaInput" }],
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
