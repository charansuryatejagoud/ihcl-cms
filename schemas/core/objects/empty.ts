import { FaBatteryEmpty as Icon } from "react-icons/fa";

export const emptyPreview = {
  select: {
    title: "title",
   },
  prepare({ title }) {
      return {
      title: `${title ?? "<Empty>"}`,
    };
  },
};


export default {
  name: "empty",
  title: "Empty Item",
  type: "object",
  icon: Icon,
  initialValue: {
      title: "Empty Item",
    },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
     },
  ],
  preview: emptyPreview,
};
