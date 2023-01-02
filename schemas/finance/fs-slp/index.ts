import { RiPulseFill as Icon } from "react-icons/ri";
export default {
  name: "finance.slp",
  title: "[Finance SLP] plans",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "headerText",
      title: "Factors affecting header",
      type: "string",
    },
    {
      name: "subHeaderText",
      title: "Factors affecting sub header",
      type: "text",
    },
    {
      name: "impactList",
      type: "array",
      of: [
        {
          name: "factorAffecting",
          title: "Factor affecting impacts",
          type: "creditScore.impactList",
        },
      ],
    },
  ],
};
