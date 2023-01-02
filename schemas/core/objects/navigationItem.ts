import { IoNavigate as Icon } from "react-icons/io5";
import { pathUrlRule } from "../../shared-utils";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: pathUrlRule,
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
