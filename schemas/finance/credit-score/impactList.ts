import { RiBarChartFill as Icon } from "react-icons/ri";

export default {
  name: "creditScore.impactList",
  title: "[Credit Score] impactList",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "impactType",
      title: "Impact Type",
      type: "string",
      options: {
        list: [
          { title: "High impact", value: "high_impact" },
          { title: "Medium impact", value: "medium_impact" },
          { title: "Low impact", value: "low_impact" },
        ],
      },
    },
    {
      name: "impactList",
      type: "array",
      of: [
        {
          name: "impact",
          title: "Impact list",
          type: "object",
          fields: [
            {
              name: "headerText",
              title: "Header text",
              type: "string",
            },
            {
              name: "subHeaderText",
              title: "Sub header text",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
