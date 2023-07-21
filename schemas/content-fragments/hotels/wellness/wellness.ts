export default {
  title: "Wellness",
  name: "wellness",
  type: "document",
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
      name: "bannerImage",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "spaDetails",
      title: "Spa Details",
      type: "spaInfo",
    },
    {
      name: "signatureTreatments",
      title: "Signature Treatments",
      type: "treatments",
    },
    {
      name: "dividerImage",
      title: "Divider Image",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "wellnessDetails",
      title: "Wellness Details",
      type: "wellnessInfo",
    },
  ],
};
