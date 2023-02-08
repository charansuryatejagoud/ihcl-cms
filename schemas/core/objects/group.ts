import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";

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
    initialValue: {
      hasAllLink: false,
    },

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
        name: "isSearchFieldForFilter",
        title: "Is Search Field For Filter",
        type: "boolean",
        initialValue: false,
      },
      {
        name: "isDropDown",
        title: "Is Drop Down",
        type: "boolean",
        initialValue: false,
      },
      {
        name: "isComponentFullWidth",
        title: "Is Component Full Width",
        type: "boolean",
        initialValue: false,
      },
      {
        title: "Show Divider For Title",
        name: "showDividerForTitle",
        type: "boolean",
        initialValue: true,
        group: "main",
      },
      {
        name: "isSearchEnabled",
        title: "Is Search Enabled",
        type: "boolean",
        initialValue: false,
        group: "main",
      },

      {
        name: "componentTopPadding",
        title: "Component Top Padding",
        type: "string",
        group: "main",
      },
      {
        name: "componentBottomPadding",
        title: "Component Bottom Padding",
        type: "string",
        group: "main",
      },
      {
        name: "titleColor",
        title: "Title Color",
        type: "string",
        group: "main",
        description: "Ït is required for website",
      },
      {
        name: "bgColor",
        title: "Bg Color",
        type: "string",
        group: "main",
      },
      {
        name: "row",
        title: "Row",
        type: "number",
      },
      {
        name: "column",
        title: "Column",
        type: "number",
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
        name: "heading",
        title: "Heading",
        type: "string",
      },
      {
        name: "titleAlignment",
        title: "Title Alignment",
        type: "string",
        initialValue: "regular",
        options: {
          list: [
            { title: "regular", value: "regular" },
            { title: "center", value: "center" },
          ],
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
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: variants,
        },
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
        name: "hasAllLink",
        title: "Allow More link",
        type: "boolean",
        group: "main",
      },
      {
        name: "allLink",
        title: "See all",
        type: "link",
        hidden: ({ parent }) => !parent?.hasAllLink,
        group: "main",
      },
      {
        name: "hasAlternateAllLink",
        title: "Allow alternate More link",
        type: "boolean",
        group: "main",
      },
      {
        name: "alternateAllLink",
        title: "Alternate See all",
        type: "link",
        hidden: ({ parent }) => !parent?.hasAlternateAllLink,
        group: "main",
        options: {
          collapsible: true,
          collapsed: true,
        },
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: items,
        group: "main",
      },
      {
        name: "metadata",
        type: "metadata",
        title: "Metadata",
        group: "configuration",
      },
    ],
    preview: groupPreview,
  };
}
