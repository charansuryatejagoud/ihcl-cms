export const videoAsset = {
  name: "videoAsset",
  title: "Video Asset",
  type: "object",
  fields: [
    {
      title: "Video Play",
      name: "videoPlay",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    },
    {
      title: "Video Thumbnail",
      name: "videoThumbnail",
      type: "image",
      description: "Image that will be used for larger screens like Desktop",
    },
    {
      title: "Small Video Thumbnail",
      name: "smallVideoThumbnail",
      type: "image",
      description: "Image that will be used for smaller screens like Mobile",
    },
    {
      name: "videoUrl",
      title: "Video Url",
      type: "url",
    },
  ],
};
