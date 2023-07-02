export default {
    title: "Wellness Details",
    name: 'wellnessDetails',
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
            name: 'wellnessFacilities',
            title: "Wellness Facilities",
            type: 'array',
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