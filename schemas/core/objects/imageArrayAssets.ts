export const imageArrayAssets = {
    name: "imageAssets",
    title: "Image Assets",
    type: "object",
    fields: [
        {
            name: "title",
            title: "card Title",
            type: "string",
        },
        {
            name: "front",
            title: "Front",
            type: "array",
            of: [{ type: "image" }]
        },
        {
            name: "back",
            title: "Back",
            type: "array",
            of: [{ type: "image" }]
        },
        {
            name: "largeImage",
            title: "Large Image",
            type: "array",
            of: [{ type: "image" }]
        }
    ]
};