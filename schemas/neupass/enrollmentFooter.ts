import { IoSettings as Icon } from "react-icons/io5";

export default {
  name: "neupass.enrollmentFooter",
  title: "[NeuPass] Enrollment Footer",
  type: "object",
  icon: Icon,
  fields: [
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
  ],
  preview: {
    select: {
      title: "primaryAction.title",
      subtitle: "secondaryAction.title",
    },
  },
};
