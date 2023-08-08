export default {
  name: "modalDetails",
  title: "Modal Details",
  type: "object",
  fields: [
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "contentSpecification" }],
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
      of: [{ name: "categories", type: "categoriesInfo", title: "Categories" }],
    },
    {
      name: "mobileAmenities",
      title: "Mobile Amenities",
      type: "array",
      of: [{ type: "contentSpecification" }],
    },
    {
      name: "mobileAmenitiesTitle",
      title: "Mobile Amenities Title",
      type: "string",
    },
  ],
};