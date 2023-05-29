export default {

    name: "rateCodes",
    titile: "Rate Codes",
    type: "document",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        // { name: 'roomCode', type: 'string', title: 'Room Code' },
        { name: 'rateCode', type: 'string', title: 'Rate Code' },
        { name: 'type', type: 'string', title: 'Type' },
        { name: 'subTitle', type: 'string', title: 'Sub Title' },
        { name: 'description', type: 'string', title: 'Description' },
        {
            name: "highlights",
            title: "Highlights",
            type: 'array',
            of: [{
              type: 'string',
            }]
        },
    ]

}