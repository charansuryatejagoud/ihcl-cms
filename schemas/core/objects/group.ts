import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";
import CustomText from "../../../components/custom-text/index";

const AlignmentVariant = [
  {
    title: "Regular With Two Row Title",
    value: "regular-with-two-row-title",
  },
  {
    title: "Regular With One Row Title",
    value: "regular-with-one-row-title",
  },
  {
    title: "Center With One Row Title",
    value: "center-with-one-row-title",
  },
  {
    title: "Center With Multi Line Title",
    value: "center-with-multi-line-title",
  },
  {
    title: "Center",
    value: "center",
  },
  {
    title: "Regular",
    value: "regular",
  },
  {
    title: "Center Aligned Regular Title",
    value: "center-aligned-regular-title",
  },
  {
    title: "Center Aligned Regular Title with No Hyphens",
    value: "center-aligned-regular-title-with-no-hyphens",
  },
];

export const groupPreview = {
  select: {
    title: "title",
    items: "items",
    subtitle: "subtitle",
    hidden: "isHidden",
  },
  prepare({ title, items, subtitle, hidden }) {
    const count = items?.length || 0;
    const countText = count === 1 ? "1 item" : `${count} items`;
    const hiddenIndicator = hidden ? "🚫 " : "";
    return {
      title: `${hiddenIndicator}${title ?? "<Group>"}`,
      subtitle: `${subtitle || ""} (${countText})`,
    };
  },
};
export default function group({
  variants,
  items,
}: {
  variants: VariantDefinition[];
  items: SchemaItem[];
}) {
  return {
    name: "group",
    title: "Group",
    type: "object",
    initialValue: { hasAllLink: false, allowAdditionalParameters: false },
    icon: Icon,
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
          title: "Title",
          name: "title",
          type: "string",
          group: "main",
      },
      {
        title: "GroupTitle",
        name: "groupTitle",
        type: "object",
        options: {
          collapsible: true,
          collapsed: false, 
        },
        fields: [
          {
            type: "array",
            name: "desktopTitle",
            description:
              "This Title is used for the Larger Screens like Desktop",
            of: [
              {
                type: "string",
                name: "value",
              },
            ],
          },
          {
            type: "array",
            name: "mobileTitle",
            description:
              "This Title is used for the Smaller Screens like Mobile",
            of: [
              {
                type: "string",
                name: "value",
              },
            ],
          },
        ],
      },
      {
        name: "subTitle",
        title: "Sub Title",
        type: "string",
        group: "main",
      },
      {
        name: "charactersLimit",
        title: "Characters Limit",
        type: "number",
        group: "main",
        Description: "Number of characters limit for group subtitle.",
      },
      {
        name: "heading",
        title: "Heading",
        type: "string",
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
        name: "isMobileComponentFullWidth",
        title: "is Mobile Component Full Width",
        type: "boolean",
        description:
          "This is used to handle Full width for the Mobile Component",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: variants,
        },
        group: "main",
      },
      {
        name: "isComponentFullWidth",
        title: "Is Component Full Width",
        type: "boolean",
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: variants,
        },
        group: "main",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
        group: "main",
      },
      {
        name: "image",
        title: "Image",
        description: "Image that will be used for smaller screens like Mobile",
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
        name: "hasAlternateAllLink",
        title: "Allow alternate More link",
        type: "boolean",
        group: "main",
      },
      {
        name: "alternateAllLinks",
        title: "Alternate See all",
        type: "array",
        of: [{ type: "navigationItem" }],
        hidden: ({ parent }) => !parent?.hasAlternateAllLink,
        group: "main",
        options: {
          collapsible: true,
          collapsed: true,
        },
      },
      {
        name: "isDynamicComponent",
        title: "is Dynamic Component",
        type: "boolean",
        description:
          "This field is for Load More Option for dynamically managing the items",
        group: "main",
      },
      {
        name: "preRenderItemsCount",
        title: "Pre Render Items Count",
        type: "number",
        hidden: ({ parent }) => !parent?.isDynamicComponent,
      },
      {
        name: "postRenderItemsCount",
        title: "Post Render Items Count",
        type: "number",
        hidden: ({ parent }) => !parent?.isDynamicComponent,
      },

      // uiConfiguration([
      //   {
      //     name: "childAspectRatio",
      //     title: "Child Aspect Ratio",
      //     type: "number",
      //     initialValue: 1.0,
      //   },
      //   {
      //     name: "widthFactor",
      //     title: "Width Factor",
      //     description:
      //       "Width factor wrt device screen width (widthFactor = ScreenWidth / itemWidth)",
      //     type: "number",
      //     initialValue: 1.0,
      //   },
      //   verticalPadding,
      //   {
      //     name: "separatorSpacing",
      //     title: "Separator Spacing",
      //     type: "number",
      //     initialValue: 8.0,
      //     options: {
      //       list: [0, 4, 8, 12, 16, 24, 32, 40, 48],
      //     },
      //   },
      // ]),
      {
        name: "items",
        title: "Items",
        type: "array",
        of: items,
        group: "main",
      },
      {
        name: "allowAdditionalParameters",
        type: "boolean",
        title: "Allow Additional Parameters",
        group: "main",
      },
      {
        name: "parameterMap",
        title: "Parameter Map",
        description: "Parameters as a set of key-value pairs",
        hidden: ({ parent }) => !parent.allowAdditionalParameters,
        type: "array",
        of: [
          {
            type: "object",
            title: "Parameter",
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
      // {
      //   name: "metadata",
      //   type: "metadata",
      //   title: "Metadata",
      //   group: "configuration",
      // },
    ],
    preview: groupPreview,
  };
}
