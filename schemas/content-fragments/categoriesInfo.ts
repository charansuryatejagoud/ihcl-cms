export default {
  name: "categoriesInfo",
  title: "Categories",
  type: "object",
  fields: [
    { name: "category", type: "string", title: "Category" },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
