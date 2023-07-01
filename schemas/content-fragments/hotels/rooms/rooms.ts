export default {
    title: "Rooms",
    name: 'rooms',
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
            name: "roomsList",
            title: "Rooms",
            type: "array",
            of: [
                { type: "roomDetails" }
            ]
        },
    ],
}