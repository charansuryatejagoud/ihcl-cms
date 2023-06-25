export default {

    name: "roomDetails",
    titile: "Room Details",
    type: "object",
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'roomCode', type: 'string', title: 'Room Code' },
        // { name: 'rateCode', type: 'string', title: 'Rate Code' },
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
            name: "rateCodeList",
            title: "Rate Code List",
            type: "array",
            of: [
                {
                    name: "rateCode",
                    title: "Rate Code",
                    type: 'reference',
                    to: [{ type: "rateCodes" }]
                },
            ]
        },
        { name: 'roomModalDetails', type: 'modalDetails', title: 'Room Modal Details' },
        // {
        //     name: "packages",
        //     title: "Packages",
        //     type: "array",
        //     of: [
        //         { name: 'code', type: 'string', title: 'Code' },
        //         { name: 'title', type: 'string', title: 'Title' },
        //         { name: 'details', type: 'string', title: 'Details' },
        //     ]
        // },
    ]

}