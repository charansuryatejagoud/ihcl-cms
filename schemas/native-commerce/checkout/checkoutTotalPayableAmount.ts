import { IoCartOutline as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.checkoutTotalPayableAmount",
  title: "[Flash Commerce] Checkout Total Payable Amount",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Flash Commerce] Checkout Total Payable Amount",
    amountPayableLabel: "Amount payable",
    orderSummaryLabel: "Order summary",
    viewDetailsLabel: "View details",
    proceedToPaymentLabel: "Proceed to payment",
    changePincodeLabel: "Try changing pincode",
    heading: "Order Total",
    priceLabel: "Price",
    priceSubheadingLabel: "Inclusive of taxes",
    discountLabel: "Discount",
    taxesLabel: "Taxes",
    deliveryLabel: "Delivery",
    couponDiscountLabel: "Coupon discount",
    cartTotalLabel: "Cart Total",
    doneLabel: "Done",
    cartValueChangedLabel: "Your cart value has changed.",
    primaryCTALabel: "Okay",
    primaryCTATextForUpdate: "Proceed",
    secondaryCTATextForUpdate: "Cancel",
    primaryDescriptionHeading: "Please try again.",
    productNotAvailableLabel: "Few items in your cart are no more available",
    paymentInProgresssLabel:
      "Payment is already in progress, please wait for sometime to reinitiate the payment",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "amountPayableLabel",
      title: "Amount Payable Label",
      type: "string",
    },
    {
      name: "orderSummaryLabel",
      title: "Order Summary Label ",
      type: "string",
    },
    {
      name: "viewDetailsLabel",
      title: "View Details Label",
      type: "string",
    },
    {
      name: "proceedToPaymentLabel",
      title: "Proceed to Payment Label",
      type: "string",
    },
    {
      name: "changePincodeLabel",
      title: "Change Pincode Label",
      type: "string",
    },
    {
      name: "priceLabel",
      title: "Price Label",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
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
      name: "cartTotalLabel",
      title: "Cart Total Label",
      type: "string",
    },
    {
      name: "doneLabel",
      title: "Done Label ",
      type: "string",
    },
    {
      name: "cartValueChangedLabel",
      title: "Cart Value Changed Label ",
      type: "string",
    },
    {
      name: "primaryCTALabel",
      title: "Primary CTA Label ",
      type: "string",
    },
    {
      name: "secondaryCTATextForUpdate",
      title: "Secondary CTA Text For Update ",
      type: "string",
    },
    {
      name: "primaryCTATextForUpdate",
      title: "Primary CTA Text For Update ",
      type: "string",
    },
    {
      name: "primaryDescriptionHeading",
      title: "Primary Text For Description in popup",
      type: "string",
    },
    {
      name: "productNotAvailableLabel",
      title: "Unavailable quantities label",
      type: "string",
    },
    {
      name: "paymentInProgresssLabel",
      title: "Payment in progress label",
      type: "string",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
};
