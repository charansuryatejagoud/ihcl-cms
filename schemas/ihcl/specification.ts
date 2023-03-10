import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";

export default {
  name: "specification",
  title: "Specification",
  type: "object",
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "comparativeSpefications",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title ?? "<Specification>"}`,
        subtitle: `items: ${subtitle.length}`,
      };
    },
},
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "comparativeSpefications",
      title: "Comparative Spefications",
      type: "array",
      group: "main",
      of: [
        {
          type: "image",
        },
        {
          title: "Text",
          type: "object",
          fields: [
            {
              name: "title",
              // title: "Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
