import { IoCartOutline as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.cartOrderTotalDetails",
  title: "[Flash Commerce] Cart Order Total Details",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "Order Total",
    priceLabel: "Price",
    priceSubheadingLabel: "Inclusive of taxes",
    discountLabel: "Discount",
    taxesLabel: "Taxes",
    deliveryLabel: "Delivery",
    couponDiscountLabel: "Coupon discount",
    cartTotal: "Cart Total",
    neuPassMemberLeadingLabel: "Up to",
    neuPassMemberTrailingLabel: "NeuCoins",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "priceLabel",
      title: "Price Label",
      type: "string",
    },
    {
      name: "priceSubheadingLabel",
      title: "Price Subheading Label",
      type: "string",
    },
    {
      name: "discountLabel",
      title: "Discount Label",
      type: "string",
    },
    {
      name: "taxesLabel",
      title: "Taxes Label",
      type: "string",
    },
    {
      name: "deliveryLabel",
      title: "Delivery Label",
      type: "string",
    },
    {
      name: "couponDiscountLabel",
      title: "Coupon Discount Label",
      type: "string",
    },
    {
      name: "cartTotal",
      title: "Cart Total",
      type: "string",
    },
    {
      name: "neuPassMemberLeadingLabel",
      title: "NeuPass Member Leading Label",
      type: "string",
    },
    {
      name: "neuPassMemberTrailingLabel",
      title: "NeuPass Member Trailing Label",
      type: "string",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
};
