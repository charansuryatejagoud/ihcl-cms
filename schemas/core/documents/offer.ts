import { IoPricetag as Icon } from "react-icons/io5";
import { linkTypeField, pathUrlRule } from "../../shared-utils";

export default {
  name: "offer",
  title: "Offer",
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
      name: "brand",
      title: "Brand",
      type: "reference",
      weak: false,
      to: [{ type: "brand" }],
    },
    {
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "url",
          title: "Url",
          type: "url",
          validation: pathUrlRule,
        },
        linkTypeField({ name: "type", title: "Type" }),
        {
          name: "label",
          title: "Label",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "offerId",
      title: "Offer ID",
      type: "string",
    },
    {
      name: "programId",
      title: "Program ID",
      type: "string",
    },
    {
      name: "couponId",
      title: "Coupon ID",
      type: "string",
    },
    {
      name: "couponType",
      title: "Coupon Type",
      type: "string",
    },
    {
      name: "offerGenre",
      title: "Offer Genre",
      type: "string",
    },
    {
      name: "isBundle",
      title: "Is a Bundle Offer",
      type: "boolean",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
};
