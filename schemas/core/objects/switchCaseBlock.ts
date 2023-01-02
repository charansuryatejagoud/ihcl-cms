import {
  IoApps,
  IoCheckmarkCircle as CaseItemIcon,
  IoLayers as Icon,
  IoSettings,
} from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";

export const featureFlagVariant: VariantDefinition = {
  title: "Feature Flag based",
  value: "core.switchCase.featureFlag",
};

function caseItem({ items }: { items: SchemaItem[] }) {
  return {
    title: "Switch-Case Item",
    type: "object",
    icon: CaseItemIcon,
    fields: [
      {
        name: "value",
        title: "Case value",
        description: "A unique value for this case",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "item",
        title: "Item",
        type: "array",
        of: items,
        validation: (Rule) => Rule.required().length(1),
      },
    ],
    preview: {
      select: {
        title: "value",
      },
    },
  };
}

export function switchCaseBlock({
  variants,
  items,
}: {
  variants: VariantDefinition[];
  items: SchemaItem[];
}) {
  return {
    name: "switchCaseBlock",
    title: "Switch-Case Block",
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
          "This decides the runtime logic that fetches the value for switch-case",
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
        hidden: ({ parent }) => parent?.variant !== featureFlagVariant.value,
      },
      {
        title: "Content Id",
        name: "contentId",
        description:
          "Content Id of the variant on which switch case is dependent if applicable",
        type: "string",
      },
      {
        name: "defaultCase",
        title: "Default Case value",
        type: "string",
        validation: (Rule) =>
          Rule.custom((value, { parent }) => {
            const { cases } = parent;
            if (!value) {
              return true;
            }

            const values = cases.map((x) => x.value);
            return values.includes(value)
              ? true
              : "The value does not match any of the given case values.";
          }),
        group: "main",
      },
      {
        name: "cases",
        title: "Cases",
        type: "array",
        of: [caseItem({ items })],
        validation: (Rule) =>
          Rule.required()
            .min(2)
            .custom((cases, context) => {
              const values = cases.map((x) => x.value);

              // Create a set to pick the unique values
              const set = new Set(values);

              // Unique-ness is guaranteed when count of set values equals the cases
              return set.size === values.length
                ? true
                : "Duplicate case value present. They must be unique.";
            }),
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
          title: `${hiddenIndicator}${title ?? "<Switch-Case Block>"}`,
          subtitle,
        };
      },
    },
  };
}
