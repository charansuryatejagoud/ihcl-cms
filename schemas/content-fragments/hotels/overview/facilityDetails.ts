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
        { name: 'icon', type: 'image', title: 'Icon' },
        {
            name: "list",
            title: "List",
            type: "array",
            of: [
                {
                    name: 'bulletPoints',
                    title: 'Bullet points',
                    type: 'object',
                    fields: [
                        { name: 'mobileIcon', title: 'Mobile Icon', type: 'image' },
                        { name: "item", title: "Item", type: "string" }
                    ]
                },
            ]
        },
    ],
}