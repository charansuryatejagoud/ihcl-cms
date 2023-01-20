import { GiVerticalBanner } from "react-icons/gi";
import { IoApps, IoSettings } from "react-icons/io5";
export default {
    title: 'Banner',
    name: 'banner',
    type: 'object',
    icon: GiVerticalBanner,
    initialValue: {
        mediaType: 'image'
    },
    groups: [
        { name: "main", title: "Main", icon: IoApps },
        { name: "configuration", title: "Configuration", icon: IoSettings },
      ],
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string',
            group:"main"
        },
        {
            title: 'Large Variant',
            name: 'largeVariant',
            type: 'string',
            group:"main"
        },
        {
            name: "titleRow",
            title: "Title Row",
            type: "string",
            initialValue:"1-Row-Title",
            options: {
              list: [
                {
                  title: "1-Row-Title",
                  value: "1-row-title",
                },
                {
                  title: "2-Row-Title",
                  value: "2-row-title",
                },
              ],
            },
            group:"main"
          },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            group:"main"
        },
        {
            name:"chatBotImage",
            title:"Chat Bot Image",
            type:"image",
            group:"main"
        },
        {
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            group:"main",
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