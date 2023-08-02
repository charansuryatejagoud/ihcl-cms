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
      name: "indianTherapies",
      title: "Indian Therapies",
      type: "treatments",
    },
    {
      name: "indianAromaTherapies",
      title: "Indian Aroma Therapies",
      type: "treatments",
    },
    {
      name: "spaIndulgences",
      title: "Spa Indulgences",
      type: "treatments",
    },
    {
      name: "bodyScrubsAndWraps",
      title: "Body Scrubs And Wraps",
      type: "treatments",
    },
    {
      name: "yogaAndMeditation",
      title: "Yoga And Meditation",
      type: "treatments",
    },
    {
      name: "ayurvedaTherapies",
      title: "Ayurveda Therapies",
      type: "treatments",
    },
    {
      name: "beauty",
      title: "Beauty",
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
