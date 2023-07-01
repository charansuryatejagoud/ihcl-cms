export default {
  title: "Wellness",
  name: 'wellness',
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
      title: "Banner Image",
      type: 'array',
      of: [{ type: 'media' }]
    },
    {
      name: "spaDetails",
      title: "Spa Details",
      type: 'spaDetails',
    },
    {
      name: "signatureTreatments",
      title: "Signature Treatments",
      type: 'signatureTreatments',
    },
    {
      name: "dividerImage",
      title: "Divider Image",
      type: "array",
      of: [{ type: 'media' }]
    },
    {
      name: "wellnessDetails",
      title: "Wellness Details",
      type: 'wellnessDetails',
    },
  ],
}