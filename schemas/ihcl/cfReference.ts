import { IoLinkOutline as Icon } from "react-icons/io5";
export default {
  name: "cfReference",
  title: "Content Fragment Reference",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cfs",
      title: "Content Fragments",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "contentFragment" }],
        },
      ],
    },
  ],
};
