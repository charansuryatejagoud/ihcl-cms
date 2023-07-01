export default {
  title: "Experiences",
  name: 'experiences',
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: 'title',
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
      name: "signatureExperience",
      title: "Signature Experience",
      type: 'basicInfo'
    },
    {
      name: "experienceDetails",
      title: "Experience Details",
      type: "array",
      of: [
        { type: "basicInfo" }
      ]
    },
  ],
}