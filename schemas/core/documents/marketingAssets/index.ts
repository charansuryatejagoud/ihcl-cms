import { IoFolder as Icon } from "react-icons/io5";
import { urlBuilder } from "./urlBuilder";

export default {
  title: "Marketing Assets",
  name: "marketing",
  type: "document",
  icon: Icon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image url builders",
      name: "urls",
      type: "array",
      of: [urlBuilder],
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
