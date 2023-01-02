import { AiOutlineForm as Icon } from "react-icons/ai";
import { pathUrlRule } from "../shared-utils";

export default {
  name: "auth.form",
  title: "[Auth] Form",
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
          { title: "Phone", value: "phone" },
          { title: "Otp", value: "otp" },
        ],
      },
    },
    // @todo: add validations, allowrd values: page.path
    {
      name: "successUrl",
      title: "Success Redirection URL",
      type: "url",
      validation: pathUrlRule,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "variant",
    },
  },
};
