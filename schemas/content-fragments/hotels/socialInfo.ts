export default {
    title: "Social Info",
    name: 'socialInfo',
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
            name: "socialImages",
            title: "Social Images",
            type: "array",
            of: [
                { name: "image", title: "Image", type: "image" }
            ]
        },
    ],
} 