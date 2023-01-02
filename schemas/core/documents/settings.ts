import {
  IoApps,
  IoBrowsers,
  IoPhonePortrait,
  IoSettings as Icon,
} from "react-icons/io5";

export default {
  name: "settings",
  title: "Settings",
  type: "document",
  icon: Icon,
  // Disallow creation and deletion
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  groups: [
    { name: "common", title: "Common", icon: IoApps },
    { name: "web", title: "Web", icon: IoBrowsers },
    { name: "mobile", title: "Mobile", icon: IoPhonePortrait },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "common",
    },
    {
      name: "tagline",
      title: "Tag line",
      type: "string",
      group: "common",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      group: "common",
    },
    {
      name: "headerItems",
      title: "Header Items",
      type: "array",
      of: [{ type: "link" }],
      group: "web",
    },
    {
      name: "tabs",
      title: "Tab Items",
      type: "array",
      of: [{ type: "navigationItem" }],
      group: "mobile",
    },
    {
      name: "slpAccordianItems",
      title: "SLP Dropdown List",
      type: "array",
      of: [{ type: "link" }],
      group: "web",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
      media: "image",
    },
  },
};
