import { GiVerticalBanner } from "react-icons/gi";
export default {
    title: 'Banner',
    name: 'banner',
    type: 'object',
    icon: GiVerticalBanner,
    initialValue: {
        mediaType: 'image'
    },
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string'
        },
        {
            title: 'Large Variant',
            name: 'largeVariant',
            type: 'string'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name:"chatBotImage",
            title:"Chat Bot Image",
            type:"image"
        },
        {
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Video', value: 'video' },
                    { title: 'Image', value: 'image' },
                    { title: 'Component', value: 'component' }
                ]
            }
        },
        {
            name: "imageAsset",
            title: "Image",
            type: "imageAsset",
            hidden: ({ parent }) => parent?.mediaType !== "image" && parent?.largeVariant !== "image",
        },
        {
            name: "videoAsset",
            title: "Video",
            type: "videoAsset",
            hidden: ({ parent }) => parent?.mediaType !== "video" && parent?.largeVariant !== "video",
        },
        {
            title: "Components",
            name: "components",
            type: "component",
            hidden: ({ parent }) => parent?.mediaType !== "component" && parent?.largeVariant !== "component",
        },
    ],

    preview: {
        select: {
            title: "title",
            subtitle: "description",
            media: "image",
            hidden: "isHidden",
        },
        prepare({ title, subtitle, hidden, media }) {
            const hiddenIndicator = hidden ? "🚫 " : "";

            return {
                title: `${hiddenIndicator}${title ?? "<banner>"}`,
                subtitle,
                media,
            };
        },
    },
};



export const bannerComponents = (props) => {
    return {
        name: "component",
        title: "Component",
        type: "object",
        fields: [
            {
                name: "item",
                title: "Item",
                type: "array",
                of: props
            }
        ]

    }
}