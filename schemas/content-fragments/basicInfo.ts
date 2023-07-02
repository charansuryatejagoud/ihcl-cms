export default {
    name: "basicInfo",
    title: "Basic Info",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "subTitle",
            title: "Sub Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
        },
        {
            name: "specifications",
            title: "Specifications",
            type: "array",
            of: [{ type: "specifications" }]
        },
        {
            title: 'Media',
            name: 'media',
            type: 'array',
            of: [{ type: 'media' }]
        }
    ]

}