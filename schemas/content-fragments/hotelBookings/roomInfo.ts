export default {
    title: "Room Info",
    name: 'roomInfo',
    type: "document",
    fields: [
        {
          name: "id",
          title: "Id",
          type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: 'string'
        },
        {
            name: "images",
            title: "Images",
            type: 'array',
            of: [{
              type: 'image',
            }]
        },
        {
            name: "highlights",
            title: "Highlights",
            type: 'array',
            of: [{
              type: 'string',
            }]
        },
    ],
}