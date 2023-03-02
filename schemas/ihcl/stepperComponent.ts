import { BiBarChartAlt } from "react-icons/bi";
const stepperVariants = [
  {
    title: "Default Stepper",
    value: "default-stepper",
  },
  {
    title: "Custom Stepper",
    value: "custom-stepper",
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
      name:"stepNo",
      title:"Step No",
      type:"number"
    },
    {
      name: "activeStep",
      title: "Active Step",
      type: "boolean",
      initialValue: false,
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
  preview: {
    select: {
        title: "title",
        subtitle: "description",
        media: "image",
        hidden: "isHidden",
    },
    prepare({ title, subtitle, hidden, media }) {
        const hiddenIndicator = hidden ? "🚫 " : "";

        return {
            title: `${hiddenIndicator}${title ?? "<stepper>"}`,
            subtitle,
            media,
        };
    },
},
};

