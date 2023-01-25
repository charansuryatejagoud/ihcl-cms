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
<<<<<<< HEAD
            of: [{ type: "image" }]
=======
            of:[
                {
                    type:"image"
                }
            ]

>>>>>>> b2fffde9b1c2f94c3b60457e39af0cc3184b000d
        }
    ]
};