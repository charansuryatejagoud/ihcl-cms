import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
  IoSettings,
} from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";
import { contentTypes } from "../../constants";

export default function placeholder({
  variants,
  cardVariants,
}: {
  variants: VariantDefinition[];
  cardVariants: VariantDefinition[];
}) {
  return {
    name: "layoutPlaceholder",
    title: "Layout Placeholder",
    type: "object",
    icon: Icon,
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      { ...hiddenField, group: "main" },
      {
        name: "charactersLimit",
        title: "Characters Limit",
        type: "number",
        group: "main",
        Description: "Number of characters limit for placeholder description.",
      },
      {
        name: "groupLargeVariant",
        title: "Group Large Variant",
        type: "string",
        options: {
          list: variants,
        },
        group: "main",
      },
      {
        name: "cardLargeVariant",
        title: "Card Large Variant",
        type: "string",
        options: {
          list: cardVariants,
        },
        group: "main",
      },
      {
        name: "aesthetic",
        title: "Aesthetic",
        type: "reference",
        to: [{ type: "uiConfiguration" }],
      },
      {
        name: "contentType",
        title: "Content Type",
        type: "string",
        options: {
          list: contentTypes,
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
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "subtitle",
        variant: "variant",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, variant, hidden }) {
        const hiddenIndicator = hidden ? "🚫 " : "";
        const variantText = variant ? `(${variant})` : "";

        return {
          title: `${hiddenIndicator}${title ?? "<Layout Placeholder>"}`,
          subtitle: `${subtitle ?? ""}${variantText}`,
        };
      },
    },
  };
}