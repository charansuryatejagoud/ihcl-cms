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

const AlignmentVariant = [
  { title: "Preceding Hyphen Title", value: "preceding-hyphen-title" },
  { title: "Normal Title", value: "normal-title" },
];

export default function cardLayout(props: Props) {
  return {
    name: "cardLayout",
    title: "Card Layout",
    type: "object",
    icon: Icon,
    initialValue: { urlType: linkType.internal, isMultiBlockContent: false },
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
        name: "charactersLimit",
        title: "Characters Limit",
        type: "number",
        group: "main",
        Description: "Number of characters limit for card description.",
      },
      {
        name: "aesthetic",
        title: "Aesthetic",
        type: "reference",
        to: [{ type: "uiConfiguration" }],
      },
      {
        name: "alignmentVariant",
        title: "Alignment Variant",
        type: "string",
        description: "This variant is for Title and Subtitle alignment",
        options: {
          list: AlignmentVariant,
        },
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
        name: "ctaLabel",
        title: "CTA Label",
        type: "string",
        group: "main",
      },
      // {
      //   name: "url",
      //   title: "Url",
      //   type: "url",
      //   inputComponent: PageLink("urlType"),
      //   validation: pathUrlRule,
      //   group: "main",
      // },
      linkTypeField({ name: "urlType", title: "Url Type", group: "main" }),
      // {
      //   name: "mediaType",
      //   title: "Media Type",
      //   type: "string",
      //   options: {
      //     list: [
      //       { title: "Video", value: "video" },
      //       { title: "Component", value: "component" },
      //       { title: "Image", value: "image" },
      //     ], 
      //   },
      // },
      // {
      //   name: "videoAsset",
      //   title: "Video",
      //   type: "videoAsset",
      //   hidden: ({ parent }) =>
      //     parent?.mediaType !== "video" && parent?.largeVariant !== "video",
      // },
      // {
      //   name: "imageAsset",
      //   title: "Image",
      //   type: "imageAsset",
      //   hidden: ({ parent }) =>
      //     parent?.mediaType !== "image" && parent?.largeVariant !== "image",
      // },
      // {
      //   title: "Components",
      //   name: "components",
      //   type: "component",
      //   hidden: ({ parent }) =>
      //     parent?.mediaType !== "component" &&
      //     parent?.largeVariant !== "component",
      // },
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
        largeVariant: "largeVariant",
        subtitle: "description",
        media: "image",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, hidden, media }) {
        const hiddenIndicator = hidden ? "🚫 " : "";

        return {
          title: `${hiddenIndicator}${title ?? "<Card Layout>"}`,
          subtitle,
          media,
        };
      },
    },
  };
}
