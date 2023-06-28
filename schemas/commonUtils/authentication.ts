import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
  IoSettings,
} from "react-icons/io5";
import { VariantDefinition } from "schemas/types";

const authenticationTypes = [
  { title: "Mobile", value: "mobile" },
  { title: "Email", value: "email" },
  { title: "Membership", value: "membership" },
  { title: "Forgot Password", value: "forgotPassword" },
];

export default function authentication({
  variants,
}: {
  variants: VariantDefinition[];
}) {
  return {
    name: "authentication",
    title: "Authentication",
    type: "object",
    icon: Icon,
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      {
        name: "Type",
        title: "Type",
        type: "string",
        options: {
          list: authenticationTypes,
        },
      },
      {
        name: "title",
        title: "Title",
        type: "string",
        group: "main",
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
        group: "main",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
        group: "main",
      },
      {
        name: "text",
        title: "Text",
        type: "string",
      },
      {
        title: "Content",
        name: "content",
        type: "blockContent",
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
        name: "metadata",
        type: "metadata",
        title: "Metadata",
        group: "configuration",
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
          title: `${hiddenIndicator}${title ?? "<Placeholder>"}`,
          subtitle: `${subtitle ?? ""}${variantText}`,
        };
      },
    },
  };
}
