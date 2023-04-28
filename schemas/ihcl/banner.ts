import { GiVerticalBanner } from "react-icons/gi";
import { IoApps, IoSettings } from "react-icons/io5";

const AlignmentVariant = [
  {
    title: "Regular Title with Two Rows",
    value: "regular-title-with-two-rows",
  },
  {
    title: " Short Hero Title With Two Rows",
    value: "short-hero-title-with-two-rows",
  },
  {
    title: " Short Hero Title With One Row",
    value: "short-hero-title-with-one-row",
  },
  {
    title: "Title With One Row",
    value: "title-with-one-row",
  },
];
const variants = [
  {
    title: "Hero Banner",
    value: "hero-banner",
  },
  {
    title: "Banner With Action",
    value: "banner-with-action",
  },
];

export default {
  title: "Banner",
  name: "banner",
  type: "object",
  icon: GiVerticalBanner,
  initialValue: {
    mediaType: "image",
  },
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      title: "Is Guest Search",
      name: "isGuestSearch",
      type: "boolean",
      initialValue: true,
    },
    {
      title: "Title",
      name: "title",
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
      title: "Content",
      name: "singleContent",
      type: "blockContent",
      group: "main",
    },
    {
      name: "alignmentVariant",
      title: "Alignment Variant",
      type: "string",
      description: "This variant is for Title alignment",
      options: {
        list: AlignmentVariant,
      },
      group: "main",
    },
    {
      name: "chatBotImage",
      title: "Chat Bot Image",
      type: "image",
      group: "main",
    },
    {
      name: "doesBannerContainsFeaturedLogo",
      title: "Does Banner Contains Featured Logo",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      hidden: ({ parent }) => !parent?.doesBannerContainsFeaturedLogo,
    },
    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: variants,
      },
      group: "main",
    },
    {
      title: "Large Variant",
      name: "largeVariant",
      type: "string",
      options: {
        list: variants,
      },
      group: "main",
    },
    {
      title: "Search Field Variant",
      name: "searchFieldVariant",
      type: "string",
      options: {
        list: [
          {
            title: "Global Search Field",
            value: "ihcl.banner.global-search-field",
          },
          {
            title: "Global Booking Mask",
            value: "ihcl.banner.global-booking-mask",
          },
          {
            title: "Global Search Field is not Allowed",
            value: "ihcl.banner.global-search-field-is-not-allowed",
          },
        ],
      },
      group: "main",
    },
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "Video", value: "video" },
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
        parent?.mediaType !== "image" && parent?.largeVariant !== "image",
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
        of: props,
      },
    ],
  };
};
