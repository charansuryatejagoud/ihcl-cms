export default {

    name: "diningDetails",
    titile: "Dining Details",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'code', type: 'string', title: 'Code' },
        { name: 'type', type: 'string', title: 'Type' },
        { name: 'subTitle', type: 'string', title: 'Sub Title' },
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