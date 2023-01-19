import { IoTabletLandscapeOutline as Icon } from "react-icons/io5";
import { hiddenField } from "../../shared-utils";

export default {
  title: "Block Section",
  name: "blockSection",
  type: "object",
  icon: Icon,
  fields: [
    hiddenField,
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Identifier",
      description: "This will be used to identify this block when rendering",
      name: "identifier",
      type: "string",
    },
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
    {
      name:"bgColor",
      title:"Bg Color",
      type:"string"
    },
    {
      title: "Content",
      name: "content",
      type: "blockContent",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "identifier",
      hidden: "isHidden",
    },
    prepare({ title, subtitle, hidden }) {
      const hiddenIndicator = hidden ? "🚫 " : "";
      return {
        title: `${hiddenIndicator}${title ?? "Block Section"}`,
        subtitle,
      };
    },
  },
};
