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
            type: 'string',
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
            name: "roomsList",
            title: "Rooms List",
            type: "array",
            of: [
                { type: "roomDetails" }
            ]
        },
    ],
}