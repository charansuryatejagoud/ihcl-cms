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
      name: "overviewInfo",
      title: "Overview Info",
      type: 'basicInfo'
    },
  ],
};
