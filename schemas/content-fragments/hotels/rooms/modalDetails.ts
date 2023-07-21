export default {
  name: "modalDetails",
  title: "Modal Details",
  type: "object",
  fields: [
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "specification" }],
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ name: "categories", type: "categories", title: "Categories" }],
    },
  ],
};
