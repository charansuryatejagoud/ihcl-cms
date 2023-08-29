import { fileValidationRule } from "./../../shared-utils";

export default {
  type: "object",
  name: "fileDocument",
  title: "File",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "fileName",
      title: "Name of file",
      type: "string",
    },
    {
      type: "file",
      title: "File",
      name: "file",
      validation: (Rule) => fileValidationRule(Rule),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
