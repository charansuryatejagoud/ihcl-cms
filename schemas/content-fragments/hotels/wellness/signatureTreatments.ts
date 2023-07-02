export default {
  title: "Signature Treatments",
  name: 'signatureTreatments',
  type: "object",
  fields: [
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
      name: "signatureTreatmentDetails",
      title: "Signature Treatment Details",
      type: "array",
      of: [
        {
            type: "object",
            fields: [{
                name: 'basicInfo',
                title: 'Basic Info',
                type: 'basicInfo'
            }],
            preview: {
              select: {
                title: 'basicInfo',
                // subtitle: 'releaseDate'
              },
              prepare(selection) {
                const { title } = selection
                return {
                  title: title.title
                }
              }
            }
        }
      ]
    },
  ],
} 