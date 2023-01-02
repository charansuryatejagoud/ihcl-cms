import {
  IoBulbOutline as Icon,
  IoDocumentText as IconPage,
} from "react-icons/io5";

const pageVariant = {
  type: "object",
  icon: IconPage,
  fields: [
    {
      name: "variantValue",
      type: "string",
      description: "Feature Flag Variant Name",
    },
    {
      name: "page",
      type: "reference",
      description: "The page to show for this variant",
      weak: true,
      to: [{ type: "page" }],
    },
  ],
  options: {
    columns: 2,
  },
};

export default {
  title: "Experiment",
  name: "experiment",
  type: "document",
  icon: Icon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Path",
      name: "path",
      type: "string",
    },
    {
      title: "Feature Flag",
      name: "featureFlag",
      description: "Name of feature flag defined in Launch Darkly",
      type: "string",
      validation: (Rule) => Rule.required().min(3),
    },
    {
      title: "Pages",
      name: "pages",
      type: "array",
      of: [pageVariant],
    },
  ],
  preview: {
    select: {
      title: "title",
      path: "path",
      featureFlag: "featureFlag",
    },
    prepare({ title, featureFlag, path }) {
      return {
        title,
        subtitle: `${featureFlag ?? "<Missing flag>"}, ${path ?? ""}`,
      };
    },
  },
};
