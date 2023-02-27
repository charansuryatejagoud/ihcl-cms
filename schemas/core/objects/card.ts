import { IoApps, IoCard as Icon, IoSettings } from "react-icons/io5";
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
        group: "main",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        rows: 6,
        group: "main",
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
        title: "Content",
        name: "content",
        type: "array",
        of:[
          {
            type:"blockSection"
          }
        ]
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
            { title: "Component", value: "component" },
          ],
        },
      },
      {
        name: "videoAsset",
        title: "Video",
        type: "videoAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "video" && parent?.largeVariant !== "video",
      },
      {
        title: "Components",
        name: "components",
        type: "component",
        hidden: ({ parent }) =>
          parent?.mediaType !== "component" &&
          parent?.largeVariant !== "component",
      },
      {
        name: "primaryAction",
        title: "Primary Action",
        type: "navigationItem",
        group: "main",
      },
      {
        name: "secondaryAction",
        title: "Secondary Action",
        type: "navigationItem",
        group: "main",
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
