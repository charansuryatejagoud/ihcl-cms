export default {

    name: "roomDetails",
    titile: "Room Details",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'code', type: 'string', title: 'Code' },
        { name: 'type', type: 'string', title: 'Type' },
        {
            name: "packages",
            title: "Packages",
            type: "array",
            of: [
                { name: 'code', type: 'string', title: 'Code' },
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'details', type: 'string', title: 'Details' },
            ]
        },
    ]

}