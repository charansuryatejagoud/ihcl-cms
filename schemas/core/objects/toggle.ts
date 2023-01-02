import { IoApps, IoToggleSharp as Icon, IoSettings } from "react-icons/io5";
import toggle_preferences from "../../../scripts/toggle_preferences";
import { hiddenField } from "../../shared-utils";

export default {
  name: "toggle",
  title: "Toggle Button",
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Preferences Key",
      name: "prefKey",
      type: "string",
      options: {
        list: [...toggle_preferences],
      },
    },
    {
      title: "Preferences Default Value",
      name: "prefValue",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      hidden: "isHidden",
      value: "prefValue",
    },
    prepare({ title, hidden, value }) {
      const hiddenIndicator = hidden ? "🚫 " : "";
      return {
        title: `${hiddenIndicator}${title ?? "<Toggle>"}`,
        icon: Icon,
      };
    },
  },
};
