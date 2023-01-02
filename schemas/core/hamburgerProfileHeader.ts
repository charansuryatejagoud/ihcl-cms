import { IoLocation as Icon } from "react-icons/io5";

export default {
  name: "core.hamburger.profile.header",
  title: "[Hamburger] Profile Header",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Hamburger] Profile Header",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
