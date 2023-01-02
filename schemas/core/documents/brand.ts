import {IoApps, IoListSharp, IoStorefront as Icon} from "react-icons/io5";

export default {
  title: "Brand",
  name: "brand",
  type: "document",
  icon: Icon,
  initialValue: { isNeupassFeatureBrand: true, isNPSavingsFreeShippingBrand: false },
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "details", title: "Details", icon: IoListSharp },
  ],
  fields: [
    {
      title: "Brand Name",
      name: "name",
      type: "string",
      group: "main",
    },
    {
      title: "Short Name",
      name: "shortName",
      type: "string",
      group: "main",
    },
    {
       title: "Brand Under Neupass",
       name: "isNeupassFeatureBrand",
       type: "boolean",
       group: "main",
    },
    {
       title: "Brand Under Savings",
       name: "isNPSavingsFreeShippingBrand",
       type: "boolean",
       group: "main",
    },
    {
      title: "Program ID",
      name: "programId",
      type: "string",
      group: "main",
    },
    {
      title: "Capillary Program ID",
      name: "capillaryProgramId",
      type: "string",
      group: "main",
    },
    {
      title: "Client ID",
      name: "clientId",
      type: "string",
      group: "main",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      group: "main",
    },
    {
      title: "Tiers",
      name: "tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Tier Name",
              type: "string",
            },
            {
              name: "tierId",
              title: "Tier Id",
              type: "string",
            },
            {
               title: "Show Expiry Date",
               name: "showExpiryDate",
               type: "boolean",
               initialValue: true,
            },
            {
              name: "color",
              title: "Color",
              type: "string",
            },
            {
              name: "amountUtilisation",
              title: "Amount Utilisation Requirement",
              type: "number",
            },
            {
              name: "nightsSpent",
              title: "Number of nights to spend",
              type: "number",
            },
            {
              name: "flightsTaken",
              title: "Number of flights required",
              type: "number",
            },
          ],
        },
      ],
      group: "details",
    },
    {
      title: "Subscriptions",
      name: "subscriptions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
            },
            {
              title: "Show Expiry Date",
              name: "showExpiryDate",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "color",
              title: "Color",
              type: "string",
            },
          ],
        },
      ],
      group: "details",
    },
    {
      title: "FAQs",
      name: "faqs",
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
      ],
      group: "details",
    },
    {
      title: "Add ons",
      name: "addons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Image",
              name: "image",
              type: "image",
            },
            {
              name: "isNeupassBrand",
              title: "Available Under Neupass",
              type: "boolean",
            },
            {
              name: "actionUrl",
              title: "Action Url",
              type: "string",
            },
          ],
        },
      ],
      group: "details",
    },
    {
      name: "benefits",
      title: "Brand Benefits",
      type: "array",
      of: [
        {
          title: "Benefit",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "logo",
              title: "Logo",
              type: "image",
            },
          ],
        },
      ],
      group: "details",
    },
    {
      name: "logo",
      title: "Brand Logo",
      type: "image",
      group: "main",
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      description: "Banner image for specific brand",
      group: "main",
    },
  ],
  preview: {
    select: {
      title: "name",
      shortName: "shortName",
      programId: "programId",
    },
    prepare({ title, shortName, programId }) {
      const values = [shortName ?? undefined, programId ?? undefined].filter(
        (x) => x !== undefined,
      );

      const subtitle = values.length > 0 ? values.join(", ") : undefined;

      return {
        title,
        subtitle,
      };
    },
  },
};
