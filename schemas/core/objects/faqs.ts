import { BsFillQuestionCircleFill as faqIcon } from "react-icons/bs";

export default {
  name: "faqs",
  title: "FAQ'S (Question/Answer)",
  type: "object",
  icon: faqIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "aesthetic",
      title: "Aesthetic",
      type: "reference",
      to: [{ type: "uiConfiguration" }],
    },
    {
      name: "largeVariant",
      title: "Large Variant",
      type: "string",
    },
    {
      name: "items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Question",
              name: "question",
              type: "string",
            },
            {
              title: "Answer",
              name: "answer",
              type: "blockContent",
            },
          ],
        },
        {
          type: "card",
        },
        {
          type: "object",
          name:"questionAndAnswer",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              type: "array",
               name:"items",
              of: [
                {type: "questionAndAnswer"}
              ],
            },
          ],
        },
      ],
    },
    {
      name: "primaryAction",
      title: "Primary Action",
      type: "navigationItem",
    },
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare({ title, items }) {
      const customSubtitle = items
        ? `${items.length} Questions`
        : "0 Questions";
      return {
        title,
        subtitle: customSubtitle,
      };
    },
  },
};


export const questionAndAnswer = {
  name:"questionAndAnswer",
  title: "Question and Answer",
  type: "object",
  fields: [
    {
      title: "Question",
      name: "question",
      type: "string",
    },
    {
      title: "Answer",
      name: "answer",
      type: "blockContent",
    },
  ],


}
