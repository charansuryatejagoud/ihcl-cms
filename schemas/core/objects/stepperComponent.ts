import { BiBarChartAlt } from "react-icons/bi";
const stepperVariants = [
  {
    title: "Default Stepper",
    value: "default.stepper",
  },
  {
    title: "Custom Stepper",
    value: "custom.stepper",
  },
];
export default {
  name: "stepper",
  title: "Stepper",
  type: "object",
  icon: BiBarChartAlt,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "numberOfSteps",
      title: "Number of Steps",
      type: "number",
    },
    {
      name: "currentStep",
      title: "Current Step",
      type: "number",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [...stepperVariants],
      },
    },
  ],
};