export default {

    name: "attractionDetails",
    titile: "Attraction Details",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'code', type: 'string', title: 'Code' },
        { name: 'type', type: 'string', title: 'Type' },
        { name: 'description', type: 'string', title: 'Description' },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                { name: 'roomImage', type: 'image', title: 'Room Image' },
            ]
        },
        {
          name: "specifications",
          title: "Specifications",
          type: "array",
          of: [{ type: "specifications" }]
        },
    ]

}