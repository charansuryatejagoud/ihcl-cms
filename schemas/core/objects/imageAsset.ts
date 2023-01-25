export const imageAsset = {
    name: "imageAsset",
    title: "Image Asset",
    type: "object",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "largeImage",
            title: "Large Image",
            type: "array",
            of:[
                {
                    type:"image"
                }
            ]

        }
    ]
};