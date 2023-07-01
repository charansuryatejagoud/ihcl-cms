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
                    name: "facility",
                    title: "Facility",
                    type: 'basicInfo',
                },
            ]
        },
    ],
}