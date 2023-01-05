export const videoAsset = {
    name: "videoAsset",
    title: "Video Asset",
    type: "object",
    fields: [
        {
            name: "fallback",
            title: "Fallback format",
            type: "file",
            options: {
                accept: "video/mp4"
            }
        },
        {
            name: "videoUrl",
            title: "Video Url",
            type: "url"
        }

    ]
};