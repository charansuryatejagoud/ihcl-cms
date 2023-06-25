export default {
  Title: "Hotel Details",
  name: "hotelDetails",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
        name: "bannerImage",
        title: "Banner Image",
        type: "bannerDetails",
    },
    {
      name: "overviewInfo",
      title: "Overview Info",
      type: 'object',
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ]
    },
  ],
};
