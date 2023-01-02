import { IoReorderThree as Icon } from "react-icons/io5";

export default {
  name: "serp.plpSortConfiguration",
  title: "[SERP] PLP Sort Configuration",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[SERP] PLP Sort Configuration",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};