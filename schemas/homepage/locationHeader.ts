import { IoLocation as Icon } from "react-icons/io5";

export default {
  name: "homepage.locationConfiguration",
  title: "[Homepage] Pincode & Search Configuration",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Homepage] Pincode & Search Configuration",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "staticSearchPlaceholderText",
      title: "Static Placeholder Text for Search Bar",
      type: "string",
      initialValue: "Search",
    },
    {
      name: "rotationSearchPlaceholderWords",
      title: "Rotation Placeholder Words for Search Bar",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
