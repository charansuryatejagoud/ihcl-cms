import { destinationNavigation } from "../../../schemas/constants";

export default {
  Title: "SEO Info",
  name: "destinationSeoInfo",
  type: "object",
  preview: {
    select: {
      title: "navigation"
    },
    prepare({ title }) {
      return {
        title
      };
    },
  },
  fields: [
    {
      name: "navigation",
      title: "Navigation",
      type: "string",
      options: { list: destinationNavigation },
    },
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
      name: "keywords",
      title: "Keywords",
      type: "text",
      rows: 5,
    }
  ],
};
