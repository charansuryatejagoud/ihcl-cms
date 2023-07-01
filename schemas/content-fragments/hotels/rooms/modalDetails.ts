import { specificationTypes } from "../utility";

export default {

    name: "modalDetails",
    title: "Modal Details",
    type: "object",
    fields: [
        {
            name: "specifications",
            title: "Specifications",
            type: "array",
            of: [
                {
                    name: "item",
                    title: "Item",
                    type: "object",
                    fields: [
                        {
                            title: "Key",
                            name: "key",
                            type: "string",
                            options: {
                                list: specificationTypes
                            }
                        },
                        { name: 'value', type: 'string', title: 'Value' },

                    ]
                }
            ]
        },
        {
            name: "highlights",
            title: "Highlights",
            type: "array",
            of: [
                { type: "string" }
            ]
        },
        {
            name: "amenities",
            title: "Amenities",
            type: "array",
            of: [
                { name: 'categories', type: 'categories', title: 'Categories' },
            ]
        },
    ]

}