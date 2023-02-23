import { IoCardOutline } from "react-icons/io5";
import CustomText from "../../components/custom-text/index";
export default {
  name: "motor.insurance.customText",
  title: "[Motor Insurance] Text",
  type: "object",
  icon: IoCardOutline,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "mText",
      title: "Custom Text",
      type: "text",
      inputComponent: CustomText,
    },
  ],
};