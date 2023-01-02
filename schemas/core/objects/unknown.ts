import { IoWarning as Icon } from "react-icons/io5";

export default {
  name: "unknown",
  title: "Unknown Item",
  type: "object",
  icon: Icon,
  fields: [
    {
      name: "message",
      title: "Message",
      type: "string",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Unknown",
      };
    },
  },
};
