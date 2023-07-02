export default {
  Title: "Hotel Overview",
  name: "hotelOverview",
  type: "document",
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
      name: "bannerImage",
      title: "Banner Image",
      type: 'array',
      of: [{ type: 'media' }]
    },
    {
      name: "basicInfo",
      title: "Overview Info",
      type: 'basicInfo'
    },
  ],
};
