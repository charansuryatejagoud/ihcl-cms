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
            type: 'array',
            of: [{ type: 'media' }]
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
                    type: 'title',
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
                {
                    name: "perfectEvent",
                    title: "Perfect Event Details",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [{
                                name: 'basicInfo',
                                title: 'Basic Info',
                                type: 'basicInfo'
                            }],
                            preview: {
                              select: {
                                title: 'basicInfo',
                                // subtitle: 'releaseDate'
                              },
                              prepare(selection) {
                                const { title } = selection
                                return {
                                  title: title.title
                                }
                              }
                            }
                        }
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
                    type: 'title',
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
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