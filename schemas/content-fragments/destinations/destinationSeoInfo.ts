import { destinationNavigation } from "../../../schemas/constants";

export default {
  Title: "SEO Info",
  name: "destinationSeoInfo",
  type: "object",
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
      name: "keywords",
      title: "Keywords",
      type: "text",
      rows: 5,
    },
    {
      name: "navigation",
      title: "Navigation",
      type: "string",
      options: { list: destinationNavigation },
    }
  ],
};
