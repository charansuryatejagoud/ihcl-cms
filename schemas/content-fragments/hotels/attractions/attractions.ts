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
            type: 'array',
            of: [{type:'media'}]
        },
        {
            name: "attractionDetails",
            title: "AttractionDetails",
            type: "array",
            of: [
                { type: "basicInfo" }
            ]
        },
    ],
} 