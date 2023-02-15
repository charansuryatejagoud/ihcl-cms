import { IoApps, IoLink as Icon, IoSettings } from "react-icons/io5";
import { linkType, linkTypeField, pathUrlRule } from "../../shared-utils";
import { PageLink } from "../../../branding/components/page-link/PageLink";

export default {
  name: "link",
  title: "Link",
  type: "object",
  icon: Icon,
  initialValue: { type: linkType.internal, variant: "text" },
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      group: "main",
    },
    linkTypeField({ name: "type", title: "Type", group: "main" }),
    { name: "ctaLabel", title: "Cta Label", type: "string" },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: pathUrlRule,
      inputComponent: PageLink("type"),
      group: "main",
    },
    {
      name: "mediaIcons",
      title: "Media Icons",
      type: "array",
      of: [
        {
          type: "navigationItem",
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
      name: "variant",
      title: "Representation of Link",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "Icon", value: "icon" },
          { title: "Button", value: "button" },
          { title: "Search", value: "search" },
          { title: "Menu", value: "menu" },
          { title: "Chip", value: "chip" },
          { title: "Full Width Button", value: "fullWidthButton" },
          { title: "Text Underline", value: "linkUnderline" },
          { title: "Share", value: "share" },
        ],
      },
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
      media: "image",
    },
  },
};
