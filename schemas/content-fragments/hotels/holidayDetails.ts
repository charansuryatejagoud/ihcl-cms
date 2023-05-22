export default {

    name: "holidayDetails",
    titile: "Holiday Details",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subTitle', type: 'string', title: 'Sub Title' },
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
    ]

}