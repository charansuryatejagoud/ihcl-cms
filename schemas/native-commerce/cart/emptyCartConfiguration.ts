import { IoList as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.emptyCartConfiguration",
  title: "[Flash Commerce] Empty Cart Configuration",
  type: "object",
  initialValue: {
    title: "[Flash Commerce] Empty Cart Configuration",
    description: "Your cart is empty",
  },
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "action",
      title: "Primary Action",
      type: "link",
    },
  ],
};
