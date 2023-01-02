import { IoFilter as Icon } from "react-icons/io5";

export default {
  name: "nativeCommerce.filterConfiguration",
  title: "[Native Commerce] Filter Configuration",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Native Commerce] Filter Configuration",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
