import { BsQuestionCircleFill as Icon } from "react-icons/bs";

export default {
  name: "faq.question",
  title: "FAQ Question",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
    },
    {
      name: "isPopular",
      title: "Popular",
      type: "boolean",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "faq.category",
            },
          ],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "metadata",
      options: {
        collapsable: true,
        collapsed: true,
      },
    },
  ],
};
