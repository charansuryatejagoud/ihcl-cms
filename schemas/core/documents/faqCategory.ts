import { AiFillAppstore as Icon } from "react-icons/ai";

export default {
  name: "faq.category",
  title: "FAQ Category",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "parent",
      title: "Parent",
      type: "reference",
      to: [
        {
          type: "faq.category",
        },
      ],
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
