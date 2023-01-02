import { IoImages as Icon } from "react-icons/io5";

export default {
  name: "imageSet",
  title: "Image Set",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "small",
      title: "Small Image",
      description: "Useful for smaller screen like a Phone",
      type: "image",
    },
    {
      name: "large",
      title: "Large Image",
      description: "Image that will be used for larger screens like Desktop",
      type: "image",
    },
  ],
};
