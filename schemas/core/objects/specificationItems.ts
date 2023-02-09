import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";

export default {
  name: "specificationItems",
  title: "Specification Items",
  type: "object",
  groups: [
    { name: "main", title: "Main", icon: IoApps },
    { name: "configuration", title: "Configuration", icon: IoSettings },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "comparativeSpeficationItems",
      title: "Comparative Spefication Items",
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
