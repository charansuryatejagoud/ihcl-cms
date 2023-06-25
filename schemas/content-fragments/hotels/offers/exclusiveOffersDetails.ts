export default {

    name: "exclusiveOfferDetails",
    titile: "Exclusive Offer Details",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'code', type: 'string', title: 'Code' },
        { name: 'type', type: 'string', title: 'Type' },
        { name: 'description', type: 'string', title: 'Description' },
        {
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [
            { type: "string"}
          ]
        },
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