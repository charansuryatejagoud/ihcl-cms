import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoSend as Icon,
  IoSettings,
} from "react-icons/io5";
import { VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";

export default function nudge({ variants }: { variants: VariantDefinition[] }) {
  return {
    name: "nudge",
    title: "Nudge",
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
        name: "subtitle",
        title: "Subtitle",
        type: "text",
        rows: 2,
        group: "main",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        rows: 2,
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
        name: "parameterMap",
        title: "Parameter Map",
        description: "Parameters as a set of key-value pairs",
        type: "array",
        of: [
          {
            type: "object",
            title: "Parameter",
            icon: ParameterMapIcon,
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
      {
        name: "image",
        title: "Image",
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
        name: "documents",
        title: "Documents",
        description: "Documents supported are PDF and DOCX.",
        type: "array",
        of: [
          {
            type: "fileDocument",
          },
        ],
        group: "main",
      },
      {
        name: "PrimaryAction",
        title: "Primary Action",
        type: "navigationItem",
        group: "main",
      },
      {
        name: "secondaryAction",
        title: "Secondary Action",
        type: "navigationItem",
        group: "main",
      },
      {
        name: "icon",
        title: "Icon",
        type: "array",
        of: [{ type: "navigationItem" }],
        group: "main",
      },
      {
        name: "imageAssets",
        title: "Image Assets",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "primaryImage",
                title: "Primary Image",
                type: "image",
              },
              {
                name: "secondaryImage",
                title: "Secondary Image",
                type: "image",
              },
            ],
          },
        ],
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
        subtitle: "description",
        media: "image",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, hidden, media }) {
        const hiddenIndicator = hidden ? "🚫 " : "";

        return {
          title: `${hiddenIndicator}${title ?? "<Nudge>"}`,
          subtitle,
          media,
        };
      },
    },
  };
}
