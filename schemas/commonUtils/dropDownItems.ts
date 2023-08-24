import { AiOutlineForm as Icon } from "react-icons/ai";
export default {
  name: "dropDownItems",
  title: "Drop Down Items",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cta",
      title: "Cta",
      type: "array",
      of:[
        {
            type:"navigationItem"
        }
      ]
    },
  ],
};