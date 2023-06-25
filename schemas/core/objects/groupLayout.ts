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
      title: `${hiddenIndicator}${title ?? "<Group Layout>"}`,
      subtitle: `${subtitle || ""} (${countText})`,
    };
  },
};
export default function groupLayout({
  variants,
  items,
}: {
  variants: SchemaItem[];
  items: SchemaItem[];
}) {
  return {
    name: "groupLayout",
    title: "Group Layout",
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
        name: "charactersLimit",
        title: "Characters Limit",
        type: "number",
        group: "main",
        Description: "Number of characters limit for group subtitle.",
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
    //   {
    //     name: "preRenderItemsCount",
    //     title: "Pre Render Items Count",
    //     type: "number",
    //     hidden: ({ parent }) => !parent?.isDynamicComponent,
    //   },
    //   {
    //     name: "postRenderItemsCount",
    //     title: "Post Render Items Count",
    //     type: "number",
    //     hidden: ({ parent }) => !parent?.isDynamicComponent,
    //   },

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
    //   {
    //     name: "allowAdditionalParameters",
    //     type: "boolean",
    //     title: "Allow Additional Parameters",
    //     group: "main",
    //   },
    //   {
    //     name: "parameterMap",
    //     title: "Parameter Map",
    //     description: "Parameters as a set of key-value pairs",
    //     hidden: ({ parent }) => !parent.allowAdditionalParameters,
    //     type: "array",
    //     of: [
    //       {
    //         type: "object",
    //         title: "Parameter",
    //         options: { columns: 2 },
    //         fields: [
    //           {
    //             name: "key",
    //             title: "Key",
    //             type: "string",
    //           },
    //           {
    //             name: "value",
    //             title: "Value",
    //             type: "string",
    //           },
    //         ],
    //         preview: {
    //           select: {
    //             title: "key",
    //             subtitle: "value",
    //           },
    //         },
    //       },
    //     ],
    //     group: "main",
    //   },
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