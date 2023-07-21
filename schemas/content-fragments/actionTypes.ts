import { actionTypes } from "../constants";

export default {
  title: "Action Types",
  name: "actionTypes",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: "actionType",
      title: "Action Type",
      type: "string",
      options: {
        list: actionTypes,
      },
    },
    {
      name: "primaryAction",
      title: "Primary Action",
      type: "navigationItem",
      hidden: ({ parent }) => parent?.actionType !== "primaryAction",
    },
    {
      name: "secondaryAction",
      title: "Secondary Action",
      type: "navigationItem",
      hidden: ({ parent }) => parent?.actionType !== "secondaryAction",
    },
    {
      name: "ctaLabel",
      title: "CTA Label",
      type: "navigationItem",
      hidden: ({ parent }) => parent?.actionType !== "ctaLabel",
    },
  ],
};
