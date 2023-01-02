import { IoLocation as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.cartLocationConfiguration",
  title: "[Flash Commerce] Cart Location Configuration",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Flash Commerce] Cart Location Configuration",
    changeLocationLabel: "Change",
    deliverToLabel: "Deliver to",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "changeLocationLabel",
      title: "Change Location Label",
      type: "string",
    },
    {
      name: "deliverToLabel",
      title: "Deliver To Label",
      type: "string",
    },
  ],
};
