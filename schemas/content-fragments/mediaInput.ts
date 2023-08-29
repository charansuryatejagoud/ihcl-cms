export default {
  name: "mediaInput",
  title: "Media",
  type: "object",
  fields: [
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
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
  ],
  preview: {
    select: {
      image: "imageAsset",
      title: "mediaType",
      videoAsset: "videoAsset",
    },
    prepare(selection) {
      const { image, title, videoAsset } = selection;
      return {
        title: title,
        media: image
          ? (image.largeImage[0].asset || image.image[0].asset)
          : videoAsset
          ? videoAsset.videoThumbnail.asset
          : {},
      };
    },
  },
};
