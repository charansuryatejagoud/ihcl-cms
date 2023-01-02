import { BsImages as Icon } from "react-icons/bs";

export default {
  name: "neupass.creditLine",
  title: "[NeuPass] Credit Line",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "statusMap",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "status",
              title: "Status",
              type: "string",
              options: {
                list: [
                  { title: "Unknown", value: "unknown" },
                  { title: "Pre-Approved", value: "pre-approved" },
                  { title: "Approved", value: "approved" },
                  { title: "Activated", value: "activated" },           
                ],
              },
            },
            {
              name: "group",
              title: "Group",
              description: "Group of items for the given status",
              type: "neupass.group",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: "Neupass Credit Line",
    }),
  },
};
