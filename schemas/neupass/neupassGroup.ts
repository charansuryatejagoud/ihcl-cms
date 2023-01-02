import { BsImages as Icon } from "react-icons/bs";
import { IoApps, IoSettings } from "react-icons/io5";
import { core } from "../core";
import { hiddenField } from "../shared-utils";

export default {
  name: "neupass.group",
  title: "[NeuPass] neupass Group",
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
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      group: "main",
    },
    {
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
      group: "main",
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
      name: "items",
      title: "items",
      type: "array",
      of: [
        ...core.groupItems,
        {
          type: "neupass.brandsList",
        },
        {
          type: "neupass.dashboard.benefits",
        },
      ],
      group: "main",
    },
    {
      name: "action",
      title: "Action",
      type: "link",
      group: "main",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          {
            title: "[neupass] Benefit Card",
            value: "neupass.benefitCard",
          },
          {
            title: "[neupass] Not yet enrolled",
            value: "neupass.group.not-enrolled",
          },
          { title: "[neupass] Enrolled", value: "neupass.group.enrolled" },
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
      subtitle: "subtitle",
      hidden: "isHidden",
    },
    prepare({ title, subtitle, hidden }) {
      const hiddenIndicator = hidden ? "🚫 " : "";
      return {
        title: `${hiddenIndicator}${title ?? "<Group>"}`,
        subtitle: `${subtitle || ""}`,
      };
    },
  },
};
