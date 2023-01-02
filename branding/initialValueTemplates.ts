import T from "@sanity/base/initial-value-template-builder";
import { IoMap as Icon } from "react-icons/io5";

export default [
  ...T.defaults(),
  T.template({
    id: "article-template",
    title: "Article",
    schemaType: "page",
    icon: Icon,
    value: {
      variant: "article",
    },
  }),
  T.template({
    id: "page-by-category",
    title: "Page by Category",
    description: "Page under a specific category",
    schemaType: "page",
    parameters: [{ name: "categoryId", type: "string" }],
    value: (params) => ({
      category: { _type: "reference", _ref: params.categoryId },
    }),
  }),
];
