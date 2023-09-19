import { contactTypes } from "../../../constants";

export default {
  title: "Contact",
  name: "contact",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "businessPhone",
      title: "Business Phone",
      type: "string",
    },
    {
      name: "supportPhone",
      title: "Support Phone",
      type: "string",
    },
    {
      name: "businessEmail",
      title: "Business Email",
      type: "string",
    },
    {
      name: "supportEmail",
      title: "Support Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "mobile", type: "string", title: "Mobile" },
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: contactTypes,
              },
            },
          ],
        },
      ],
    },
    {
      name: "email",
      title: "Email",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "email", type: "string", title: "Email" },
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: contactTypes,
              },
            },
          ],
        },
      ],
    },
  ],
};
