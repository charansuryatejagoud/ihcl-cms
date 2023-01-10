 import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";

export const featureFlag: VariantDefinition = {
  title: "Feature Flag",
  value: "core.ifElse.featureFlag",
};

const featureFlagVariants = [
  "core.ifElse.featureFlag",
  "finance.slp.product-segment-LD-check",
  "finance.slp.product-segment-child-LD-check",
];

export default function ifElseBlock({
  variants,
  items,
}: {
  variants: VariantDefinition[];
  items: SchemaItem[];
}) {
  return {
    name: "ifElseBlock",
    title: "If / Else Block",
    type: "object",
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
        group: "main",
      },
      {
        name: "variant",
        title: "Variant",
        description:
          "This decides the runtime logic that fetches the boolean value",
        type: "string",
        options: {
          list: variants,
        },
        group: "main",
      },
      {
        title: "Feature Flag",
        name: "featureFlag",
        description: "Name of feature flag defined in Launch Darkly",
        type: "string",
        hidden: ({ parent }) => !featureFlagVariants.includes(parent?.variant),
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: items,
        validation: (Rule) => Rule.required().length(2),
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
        subtitle: "variant",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, hidden }) {
        const hiddenIndicator = hidden ? "🚫 " : "";
        return {
          title: `${hiddenIndicator}${title ?? "<If-Else Block>"}`,
          subtitle,
        };
      },
    },
  };
}
