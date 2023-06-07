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
        type: "image",
    },
    {
      name: "hotelSpaDetails",
      title: "Hotel Spa Details",
      type: 'spaDetails',
    },
    {
      name: "signatureTreatments",
      title: "Signature Treatments",
      type: 'signatureTreatments',
    },
    {
      name: "wellnessInfo",
      title: "Wellness Info",
      type: 'object',
      fields: [
        {
          name: "sectionTitle",
          title: "Section Title",
          type: 'string',
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
        {
          name: "wellnessFacilities",
          title: "Wellness Facilities",
          type: 'object',
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
              name: "image",
              title: "Image",
              type: "image",
            },
          ]
        },
      ]
    },
  ],
}