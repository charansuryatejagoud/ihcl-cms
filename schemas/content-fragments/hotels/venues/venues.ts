export default {
    title: "Venues",
    name: 'venues',
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
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
            name: "eventVenues",
            title: "Event Venues",
            type: 'eventVenues',
        },
        {
            name: "perfectEventSection",
            title: "Perfect Events",
            type: 'object',
            fields: [
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
                    name: "perfectEvents",
                    title: "Perfect Events",
                    type: "array",
                    of: [
                        { type: "perfectEvent" }
                    ]
                },
            ]
        },
        {
            name: "timelessWeddings",
            title: "Timeless Weddings",
            type: 'object',
            fields: [
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
                    name: "backgroundImage",
                    title: "Backgorund Image",
                    type: "image",
                },
                {
                    name: "weddingEvents",
                    title: "Weddings Events",
                    type: 'array',
                    of: [
                        { type: "weddingEventDetails" }
                    ]
                },
            ]
        },
    ],
}