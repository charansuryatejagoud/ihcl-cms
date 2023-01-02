import { IoApps, IoSettings, IoVideocam as Icon } from "react-icons/io5";
import { hiddenField, pathUrlRule, videoUrlRule } from "../../shared-utils";

export default {
  name: "video",
  title: "Video",
  type: "object",
  icon: Icon,
  initialValue: { isHidden: false },
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
      type: "string",
      group: "main",
    },
    {
      name: "url",
      title: "YouTube Url",
      description:
        "A YouTube video url, in the format: https://www.youtube.com/watch?v=syvT63CosNE",
      type: "url",
      validation: videoUrlRule,
      group: "main",
    },
    {
      name: "variant",
      title: "Variant",
      type: "object",
      fields: [
        {
          name: "small",
          title: "Small",
          description: "Meant for phones",
          type: "string",
        },
        {
          name: "large",
          title: "Large",
          description: "Meant for tablets and larger screens",
          type: "string",
        },
      ],
      group: "main",
    },
    {
      name: "posterImage",
      title: "Poster Image",
      type: "object",
      fields: [
        {
          name: "small",
          title: "Small",
          description: "Meant for phones",
          type: "image",
        },
        {
          name: "large",
          title: "Large",
          description: "Meant for tablets and larger screens",
          type: "image",
        },
      ],
      group: "main",
    },
    {
      name: "aspectRatio",
      title: "Aspect Ratio",
      type: "string",
      options: {
        list: [
          { title: "16:9 Aspect", value: "aspect.16:9" },
          { title: "4:3 Aspect", value: "aspect.4:3" },
        ],
      },
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
      media: "posterImage.small",
    },
  },
};
