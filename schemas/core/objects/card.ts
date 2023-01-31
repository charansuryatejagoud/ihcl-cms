import { IoApps, IoCard as Icon, IoSettings } from "react-icons/io5";
// import { imageAsset } from "./banner";
// import { videoAsset } from "./banner";
import {
  hiddenField,
  linkType,
  linkTypeField,
  pathUrlRule,
} from "../../shared-utils";
import { VariantDefinition } from "../../types";
import { PageLink } from "../../../branding/components/page-link/PageLink";
export const acceleratorCardVariant: VariantDefinition = {
  title: "Accelerator Card",
  value: "accelerator.card",
};

interface Props {
  variants: VariantDefinition[];
}

export default function card(props: Props) {
  return {
    name: "card",
    title: "Card",
    type: "object",
    icon: Icon,
    initialValue: { urlType: linkType.internal },
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      {
        ...hiddenField,
        group: "configuration",
      },
      {
        title: "Show Divider For Title",
        name: "showDividerForTitle",
        type: "boolean",
        initialValue: false,
        group: "main",
      },
      {
        name: "isComponentFullWidth",
        title: "Is Component Full Width",
        type: "boolean",
        initialValue: false,
        group: "main",
      },
      {
        name: "bgColor",
        title: "Bg Color",
        type: "string",
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
        name: "highLights",
        title: "High Lights",
        type: "string",
        group: "main"
      },
      {
        name: "chipText",
        title: "Chip Text",
        type: "array",
        of: [{ type: "string" }]
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        rows: 6,
        group: "main",
      },
      {
        title: "Content",
        name: "content",
        type: "blockContent",
        group: "main",
      },
      {
        title: "map",
        name: "Map",
        type: "geopoint",
        group: "main",
      },
      {
        title: "Rich Text",
        name: "richText",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                title: "Rich Text Key",
                name: "richTextKey",
                type: "string",
              },
              {
                title: "Rich Text Value",
                name: "richTextValue",
                type: "string",
              },
            ],
          },
        ],
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: props.variants,
        },
        group: "main",
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: props.variants,
        },
        group: "main",
      },
      {
        name: "ctaLabel",
        title: "CTA Label",
        type: "string",
        group: "main",
      },
      {
        name: "url",
        title: "Url",
        type: "url",
        inputComponent: PageLink("urlType"),
        validation: pathUrlRule,
        group: "main",
      },
      linkTypeField({ name: "urlType", title: "Url Type", group: "main" }),
      {
        name: "logo",
        title: "Logo",
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
        name: "carouselImages",
        title: "Carousel Images",
        type: "array",
        of: [{ type: "image" }],
      },
      {
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
        group: "main",
      },
      {
        name: "mediaType",
        title: "Media Type",
        type: "string",
        options: {
          list: [
            { title: "Video", value: "video" },
            // { title: 'Image', value: 'image' },
          ],
        },
      },
      // {
      //   name: "imageAsset",
      //   title: "Image",
      //   type: "imageAsset",
      //   hidden: ({ parent }) => parent?.mediaType !== "image" && parent?.largeVariant !== "image",
      // },
      {
        name: "videoAsset",
        title: "Video",
        type: "videoAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "video" && parent?.largeVariant !== "video",
      },
      {
        name: "primaryAction",
        title: "Primary Action",
        type: "navigationItem",
      },
      {
        name: "secondaryAction",
        title: "Secondary Action",
        type: "navigationItem",
      },
      {
        name: "ctaLabel_1",
        title: "CTA Label_1",
        type: "navigationItem"
      },
      {
        name: "brand",
        title: "Brand",
        type: "reference",
        to: [{ type: "brand" }],
        group: "main",
      },
      {
        name: "metadata",
        type: "metadata",
        title: "Metadata",
        group: "configuration",
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
          title: `${hiddenIndicator}${title ?? "<Card>"}`,
          subtitle,
          media,
        };
      },
    },
  };
}
