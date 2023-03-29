export default {
    title: "Rooms",
    name: 'rooms',
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: 'string',
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "rooms",
            title: "Rooms",
            type: "array",
            of: [
               {type:"roomDetails"}
            ]
        },
    ],
}