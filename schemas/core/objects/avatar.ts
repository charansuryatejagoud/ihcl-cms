import { AiOutlineForm as Icon } from "react-icons/ai";

export default {
  name: "avatar",
  title: "Avatar",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Square", value: "square" },
          { title: "Circular", value: "circular" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "variant",
    },
  },
};
