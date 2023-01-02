import { IoSettings as Icon,IoCodeWorking as ParameterMapIcon } from "react-icons/io5";

export default {
  name: "neupass.dashboard.benefits",
  title: "[NeuPass] Dashboard Benefit",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "benefitIds",
      title: "List of Benefit IDs",
      description: "Benefit IDs need to be picked from benefits database",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "parameterMap",
      title: "Parameter Map",
      description: "Parameters as a set of key-value pairs",
      type: "array",
      of: [
        {
          type: "object",
          title: "Parameter",
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
          preview: {
            select: {
              title: "key",
              subtitle: "value",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      benefitIds: "benefitIds",
    },
    prepare({ benefitIds }) {
      return {
        title: `Priority Benefit IDs : ${benefitIds}`,
      };
    },
  },
};
