export default {
    title: "Title",
    name: "title",
    type: "object",
    options: {
        collapsible: true,
        collapsed: false,
    },
    fields: [
        {
            type: "array",
            name: "desktopTitle",
            description:
                "This Title is used for the Larger Screens like Desktop",
            of: [
                {
                    type: "string",
                    name: "value",
                },
            ],
        },
        {
            type: "array",
            name: "mobileTitle",
            description:
                "This Title is used for the Smaller Screens like Mobile",
            of: [
                {
                    type: "string",
                    name: "value",
                },
            ],
        },
    ],
}