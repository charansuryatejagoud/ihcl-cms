export default {

    name: "roomDetailsModal",
    titile: "Room Details Modal",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'sectionTitle', type: 'string', title: 'Section Title' },
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