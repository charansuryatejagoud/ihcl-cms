export function weddingAssets() {
  return {
    name: "weddingAssets",
    title: "[Events] Wedding Assets",
    type: "object",
    fields: [
      {
        name: "leftItems",
        title: "Left Items",
        type: "array",
        of: [{ type: "weddingMedia" }],
      },
      {
        name: "rightItems",
        title: "Right Items",
        type: "array",
        of: [{ type: "weddingMedia" }],
      },
    ],
  };
}

export function weddingMedia() {
  return {
    name: "weddingMedia",
    title: "Wedding Media",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "mediaType",
        title: "Media Type",
        type: "string",
        options: {
          list: [
            { title: "Video", value: "video" },
            { title: "Component", value: "component" },
            { title: "Image", value: "image" },
          ],
        },
      },
      {
        name: "videoAsset",
        title: "Video",
        type: "videoAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "video" && parent?.largeVariant !== "video",
      },
      {
        name: "imageAsset",
        title: "Image",
        type: "imageAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "image" && parent?.largeVariant !== "image",
      },
      {
        title: "Components",
        name: "components",
        type: "component",
        hidden: ({ parent }) =>
          parent?.mediaType !== "component" &&
          parent?.largeVariant !== "component",
      },
    ],
  };
}
