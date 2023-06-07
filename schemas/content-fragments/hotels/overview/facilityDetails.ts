export default {
    title: "Facility details",
    name: 'facilityDetails',
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: 'string',
        },
        {
            name: "info",
            title: "Info",
            type: "object",
            fields: [
                { name: 'icon', type: 'string', title: 'Icon' },
                {
                    name: 'bulletPoints',
                    title: 'Bullet points',
                    type: 'array',
                    of: [
                        { name: "activity", title: "Activity", type: "string" }
                    ]
                },
            ]
        },
    ],
}