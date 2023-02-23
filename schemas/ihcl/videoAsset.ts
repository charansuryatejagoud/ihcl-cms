export const videoAsset = {
    name: "videoAsset",
    title: "Video Asset",
    type: "object",
    fields: [
        {
            title: 'Video Play',
            name: 'videoPlay',
            type: 'file',
            options: {
                accept: 'video/mp4'
            }
          },
          {
            title: 'Video Thumbnail',
            name: 'videoThumbnail',
            type: 'image'
          },
        {
            name: "videoUrl",
            title: "Video Url",
            type: "url"
        }

    ]
};