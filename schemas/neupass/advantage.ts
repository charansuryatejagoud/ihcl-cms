import { HiTemplate as Icon } from "react-icons/hi";
import { AiFillPlusSquare as advantageIcon } from "react-icons/ai";

export default {
  name: "neupass.advantage",
  title: "[NeuPass] Advantages Banner",
  type: "object",
  initialValue: { variant: "enrollment" },
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the Banner displayed at the top",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "promotionalText",
      title: "Benefits Promotional Text",
      description: "Promotion Text to display price for NeuPass",
      type: "blockContent",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Enrollment ", value: "enrollment" },
          { title: "Dashboard ", value: "dashboard" },
        ],
      },
    },
    {
      name: "primaryAction",
      title: "Proceed with Enrollment",
      type: "link",
    },
    {
      name: "secondaryAction",
      title: "Skip Enrollment",
      type: "link",
    },
    {
      name: "advantages",
      title: "Neupass Advantages",
      type: "array",
      of: [
        {
          name: "advantage",
          title: "Advantage",
          type: "object",
          icon: advantageIcon,
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "variant",
              title: "Variant",
              type: "string",
              options: {
                list: [
                  { title: "Title", value: "title" },
                  { title: "Title With Image", value: "title-with-image" },
                ],
              },
            },
            {
              name: "brandImages",
              title: "Brand Images",
              type: "array",
              of: [{ type: "image" }],
            },
          ],
        },
      ],
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      description: "Background Image for the section",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
};
