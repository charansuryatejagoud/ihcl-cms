import { IoFolder as Icon } from "react-icons/io5";

export default {
  title: "Category",
  name: "category",
  type: "document",
  icon: Icon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
