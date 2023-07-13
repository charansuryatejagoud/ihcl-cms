export default {

    name: "specifications",
    title: "Specifications",
    type: "object",
    fields: [
        {
            name: "keyType",
            title: "Key Type",
            type: "string",
            options: {
                list: [
                    { title: "String", value: "string" },
                    { title: "Image", value: "image" },
                    { title: "Component", value: "component" },
                ],
            },
        },
        {
            name: "imageAsset",
            title: "Image",
            type: "imageAsset",
            hidden: ({ parent }) =>
                parent?.keyType !== "image",
        },
        {
            name: "key",
            title: "Key",
            type: "string",
            hidden: ({ parent }) =>
                parent?.keyType !== "string",
        },
        { name: 'value', type: 'string', title: 'Value' },
    ],
    preview: {
        select: {
            title: 'key',
            image: 'imageAsset',
            altTitle: 'value'
        },
        prepare(selection) {
            const { title, image, altTitle } = selection
            return {
                title: title ?? altTitle,
                // media: image.largeImage[0].asset ?? {}
            }
        }
    }

}