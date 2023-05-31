import {IoApps, IoCodeWorking as ParameterMapIcon, IoLogoWebComponent as Icon, IoSettings,} from "react-icons/io5";
import {SchemaItem} from "../../types";
import {hiddenField} from "../../shared-utils";

export default function placeholder({
  variants,
}: {
  variants: SchemaItem[];
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
