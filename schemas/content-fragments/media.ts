export default {

    name: "media",
    titile: "Media",
    type: "object",
    fields: [
    {
        name: "mediaType",
        title: "Media Type",
        type: "string",
        options: {
          list: [
            { title: "Video", value: "video" },
            { title: "Image", value: "image" },
            { title: "Component", value: "component" },
          ],
        },
      },
      {
        name: "imageAsset",
        title: "Image",
        type: "imageAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "image" && parent?.largeVariant !== "image",
      },
      {
        name: "videoAsset",
        title: "Video",
        type: "videoAsset",
        hidden: ({ parent }) =>
          parent?.mediaType !== "video" && parent?.largeVariant !== "video",
      },
    ]

}