export default {
  name: "searchBodyParams",
  title: "Search Body Params",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "shortdescription",
      title: "Short Description",
      type: "string",
    },
    {
      name: "longdescription",
      title: "Long description",
      type: "string",
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "pms_name",
      title: "PMS Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {
          name: "city",
          title: "City",
          type: "string",
        },
        {
          name: "state",
          title: "State",
          type: "string",
        },
        {
          name: "country",
          title: "Country",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "string",
        },
      ],
    },
    {
      name: "phno",
      title: "Ph No",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "restaurantType",
      title: "Restaurant Type",
      type: "string",
    },
    {
      name: "menuLink",
      title: "Menu Link",
      type: "string",
    },
    {
      name: "timings",
      title: "Timings",
      type: "string",
    },
    {
      name: "dressCode",
      title: "Dress Code",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "string",
    },
    {
      name: "geoLocation",
      title: "Geo Location",
      type: "object",
      fields: [
        {
          name: "lat",
          title: "Latitude",
          type: "string",
        },
        {
          name: "long",
          title: "Longitude",
          type: "string",
        },
      ],
    },
    {
      name: "path",
      title: "Path",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
