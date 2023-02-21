import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";
import CustomText from "../../../components/custom-text/index";

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
    initialValue: { hasAllLink: false },
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
        name: "title",
        title: "Title",
        type: "string",
        inputComponent: CustomText,
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
