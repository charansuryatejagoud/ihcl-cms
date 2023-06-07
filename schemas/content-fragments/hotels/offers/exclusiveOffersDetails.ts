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
            { name: "hightlite", type: "string", title: "Highlite"}
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