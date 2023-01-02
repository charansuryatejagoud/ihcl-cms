import { GiHappySkull as Icon } from "react-icons/gi";
import { BsCardText as BenefitIcon } from "react-icons/bs";

export default {
  name: "neupass.successModal",
  title: "[NeuPass] Success Modal",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "subtitle",
      title: "Subtitle",
      type: "blockContent",
    },
    {
      name: "benefits",
      title: "Benefit Cards",
      type: "array",
      of: [
        {
          name: "benefit",
          title: "Benefit",
          type: "object",
          icon: BenefitIcon,
          fields: [
            {
              name: "benefit",
              title: "Benefit Card",
              type: "blockContent",
            },
          ],
          preview: {
            select: {
              title: "benefit",
            },
          },
        },
      ],
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      description: "Background Image for the Modal",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "subtitle",
    },
  },
};
