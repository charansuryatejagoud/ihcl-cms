import { IoCardOutline } from "react-icons/io5";

export default {
  name: "membership",
  title: "Membership",
  type: "object",
  icon: IoCardOutline,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "image",
      title: "Images",
      type: "images",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "tax",
      title: "Tax",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "price",
      media: "image.largeImage",
    },
  },
};
