import { IoList as Icon } from "react-icons/io5";

export default {
  name: "nativeCommerce.productLabels",
  title: "[Native Commerce] Product Labels",
  type: "object",
  icon: Icon,
  initialValue: {
    colorLabel: "Colour",
    sizeLabel: "Size",
    buyNowLabel: "Buy now",
    addToCartLabel: "Add to cart",
    title: "[Native Commerce] Product Labels",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
   {
     name: "buyNowLabel",
     title: "Buy Now Label",
     type: "string",
   },
   {
     name: "addToCartLabel",
     title: "Add to cart Label",
     type: "string",
   },
   {
    name: "goToCartLabel",
    title: "Go to cart Label",
    type: "string",
   },
   {
    name: "changePincodeLabel",
    title: "Change Pincode Label",
    type: "string",
   },
   {
    name: "standardWarrantyDetails",
    title: "Standard Warranty Details",
    type: "string",
   },
   {
    name: "noWarrantyDetails",
    title: "No Warranty Details",
    type: "string",
   },
   {
    name: "freeDeliveryDetails",
    title: "Free Delivery Details",
    type: "string",
   },
   {
    name: "neupassBenefitDetails",
    title: "NeuPass Benefit Details",
    type: "string",
   },
   {
    name: "warrantyLabel",
    title: "Warranty Label",
    type: "string",
   },
   {
    name: "freeDeliveryLabel",
    title: "Free Delivery Label",
    type: "string",
   },
   {
    name: "neupassBenefitLabel",
    title: "NeuPass Benefit Label",
    type: "string",
    },
    {
     name: "priceChangeText",
     title: "Price Change Text",
     type: "string",
    },
    {
      name: "increaseDecreaseLabel",
      title: "Increase Decrease Label",
      type: "string",
    },
    {
     name: "cartToastText",
     title: "Cart Toast Text",
     type: "string",
     },
     {
      name: "cartErrorToast",
      title: "Cart Error Toast",
     type: "string",
     },
    {
     name: "monthsLabel",
     title: "Months Label",
     type: "string",
    },
    {
     name: "priceChangeCTAText",
     title: "Error CTA Text",
     type: "string",
    },
  ],
};
