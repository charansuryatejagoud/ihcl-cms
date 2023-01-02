import { AiOutlineForm as Icon } from "react-icons/ai";

export default {
  name: "creditcard.form",
  title: "[CreditCard] Form",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "inputList",
      title: "InputList",
      type: "array",
      of: [
        {
          name: "input",
          title: "Input Field",
          type: "creditcard.inputObject",
        },
      ],
    },
    {
      name: "footer",
      title: "Footer text",
      type: "string",
    },
    {
      name: "cta",
      title: "Cta",
      type: "link",
    },
  ],
};
