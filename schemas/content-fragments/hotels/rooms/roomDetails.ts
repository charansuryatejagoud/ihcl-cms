export default {

    name: "roomDetails",
    title: "Room Details",
    type: "object",
    fields: [
        {
            name: "basicInfo",
            title: "Basic Info",
            type: "basicInfo"
        },
        { name: 'roomCode', type: 'string', title: 'Room Code' },
        { name: 'type', type: 'string', title: 'Type' },
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
        {
            name: 'roomModalDetails',
            type: 'modalDetails',
            title: 'Room Modal Details'
        },
    ],
    preview: {
        select: {
            title: 'basicInfo',
            // subtitle: 'releaseDate'
        },
        prepare(selection) {
            const { title } = selection
            return {
                title: title.title
            }
        }
    }

}