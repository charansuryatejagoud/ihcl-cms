import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
  IoSettings,
} from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";
import { contentTypes } from "../../constants";
import { AlignmentVariant, cardAlignmentVariant } from "../../constants";

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
        name: "cardAlignmentVariant",
        title: "Card Alignment Variant",
        type: "string",
        description: "This variant is for Hypen preceding the Title  for card",
        options: {
          list: cardAlignmentVariant,
        },
        group: "main",
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
        name: "groupActionType",
        title: "Group Action Type",
        type: "array",
        of: [{ type: "actionTypes" }],
      },
      {
        name: "cardActionType",
        title: "Card Action Type",
        type: "array",
        of: [{ type: "actionTypes" }],
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
