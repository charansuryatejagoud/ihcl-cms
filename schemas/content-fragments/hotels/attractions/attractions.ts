export default {
    title: "Attractions",
    name: 'attractions',
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
            type: "bannerDetails",
        },
        {
            name: "attractionDetails",
            title: "AttractionDetails",
            type: "array",
            of: [
                { type: "attractionDetails" }
            ]
        },
    ],
} 