import {IoApps, IoCard as Icon, IoCodeWorking as ParameterMapIcon, IoSettings} from "react-icons/io5";
import {hiddenField, linkType,} from "../shared-utils";
import {VariantDefinition} from "../types";

interface Props {
    variants: VariantDefinition[];
}

export default {
    name: "neupass.milestoneDetails",
    title: "[Neupass] Milestone Details",
    type: "object",
    icon: Icon,
    initialValue: {urlType: linkType.internal},
    groups: [
        {name: "main", title: "Main", icon: IoApps},
        {name: "configuration", title: "Configuration", icon: IoSettings},
    ],
    fields: [
        {
            ...hiddenField,
            group: "configuration",
        },
        {
            name: "accelerator",
            title: "Accelerator",
            type: "reference",
            to: [
                {
                    type: "accelerator",
                },
            ],
            group: "main",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            group: "main",
        },
        {
            name: "subTitle",
            title: "Sub Title",
            type: "string",
            group: "main",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 2,
            group: "main",
        },
        {
            title: "Content",
            name: "content",
            type: "blockContent",
            group: "main",
        },
        {
            name: "backgroundImage",
            title: "Background Image",
            type: "image",
            group: "main",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            group: "main",
        },
        {
            name: "largeImage",
            title: "Large Image",
            description: "Image that will be used for larger screens like Desktop",
            type: "image",
            group: "main",
        },
        {
            name: "parameterMap",
            title: "Parameter Map",
            description: "Parameters as a set of key-value pairs",
            type: "array",
            of: [
                {
                    type: "object",
                    title: "Parameter",
                    icon: ParameterMapIcon,
                    options: { columns: 2 },
                    fields: [
                        {
                            name: "key",
                            title: "Key",
                            type: "string",
                        },
                        {
                            name: "value",
                            title: "Value",
                            type: "string",
                        },
                    ],
                    preview: {
                        select: {
                            title: "key",
                            subtitle: "value",
                        },
                    },
                },
            ],
            group: "main",
        },
        {
            name: "action",
            title: "Action",
            type: "link",
            group: "main",
            options: {
                collapsable: true,
            },
        },
        {
            name: "metadata",
            type: "metadata",
            title: "Metadata",
            group: "configuration",
            options: {
                collapsable: true,
            },
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "description",
            media: "image",
            hidden: "isHidden",
        },
        prepare({title, subtitle, hidden, media}) {
            const hiddenIndicator = hidden ? "🚫 " : "";

            return {
                title: `${hiddenIndicator}${title ?? "<Milestone Details>"}`,
                subtitle,
                media,
            };
        },
    },
};
