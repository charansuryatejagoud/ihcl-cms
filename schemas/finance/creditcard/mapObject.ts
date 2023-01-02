import { IoCodeWorking as ParameterMapIcon } from "react-icons/io5";
export default {
  name: "creditcard.mapObject",
  title: "[CreditCard] Map Object",
  type: "object",
  icon: ParameterMapIcon,
  options: { columns: 2 },
  fields: [
    {
      name: "key",
      title: "Key",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
  ],
};
