export default {
  name: "vouchers",
  type: "document",
  title: "Vouchers",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "voucherName",
      title: "Voucher Name",
      type: "title",
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
      name: "iscomplementary",
      title: "Is Complementary",
      type: "boolean",
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
  preview: {
    select: {
      title: "voucherName",
      code: "promoCode",
    },
    prepare({ title, code }) {
      return {
        title: `${title?.desktopTitle ?? code}`,
      };
    },
  },
};
