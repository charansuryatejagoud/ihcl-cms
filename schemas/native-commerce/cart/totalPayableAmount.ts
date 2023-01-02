import { IoCartOutline as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.cartTotalPayableAmount",
  title: "[Flash Commerce] Cart Total Payable Amount",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Flash Commerce] Cart Total Payable Amount",
    cartTotalLabel: "Cart Total",
    checkoutLabel: "Checkout",
    changePincodeLabel: "Change pincode",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cartTotalLabel",
      title: "Cart Total Label",
      type: "string",
    },
    {
      name: "action",
      title: "Primary Action",
      type: "link",
    },
    {
      name: "changePincodeLabel",
      title: "Change Pincode Label",
      type: "string",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
};
