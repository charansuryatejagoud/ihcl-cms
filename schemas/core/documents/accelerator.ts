import { IoStorefront as Icon } from "react-icons/io5";

export default {
  title: "Accelerator",
  name: "accelerator",
  type: "document",
  icon: Icon,
  fields: [
    {
      title: "Accelerator Name",
      name: "name",
      type: "string",
    },
    {
      title: "Id",
      name: "id",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type of Accelerator",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Transaction Count",
            value: "count",
          },
          {
            title: "Transaction Amount",
            value: "amount",
          },
        ],
      },
    },
    {
      title: "Brand List",
      name: "brandAccelerator",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "brand" }],
        },
      ],
    },
    {
      title: "Milestone",
      name: "milestones",
      type: "array",
      validation: (Rule) => Rule.required(),
      initialValue: [
        {
          neuCoinsToBeEarned: 0,
          targetToAchieve: 0,
        },
      ],
      of: [
        {
          type: "object",
          fields: [
            {
              title: "NeuCoins to be earned",
              name: "neuCoinsToBeEarned",
              type: "number",
            },
            {
              title: "Target to achieve",
              name: "targetToAchieve",
              type: "number",
            },
          ],
          preview: {
            select: {
              title: "neuCoinsToBeEarned",
              subtitle: "targetToAchieve",
            },
            prepare({ title, subtitle }) {
              return {
                title: `${title} Neucoins to be Earned`,
                subtitle: `${subtitle} Target to achieve `,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "id",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
