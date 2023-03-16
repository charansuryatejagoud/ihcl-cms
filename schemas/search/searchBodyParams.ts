export default {
  name: "searchBodyParams",
  title: "Search Body Params",
  type: "document",
  fields: [
    { 
       name: "title",
       title: "Title",
       type: "string"
    },
    {
       name: "ihcl_hotel_key",
       title: "IHCL Hotel Key",
       type: "string"
    },
    {
       name: "brand_name",
       title: "Brand Name",
       type: "string"
    },
    { 
       name: "brand_key",
       title: "Brand Key",
       type: "number"
    },
    { 
       name: "hotel_id",
       title: "Hotel ID",
       type: "string"
    },
    { 
       name: "hotel_code",
       title: "Hotel Code",
       type: "string"
    },
    { 
       name: "hotel_name",
       title: "Hotel Name",
       type: "string"
    },
    { 
       name: "hotel_type",
       title: "Hotel Type",
       type: "string"
    },
    { 
       name: "country",
       title: "Country",
       type: "string"
    },
    { 
       name: "state",
       title: "State",
       type: "string"
    },
    { 
       name: "region_key",
       title: "Region Key",
       type: "string"
    },
    { 
       name: "city",
       title: "City",
       type: "string"
    },
    { 
       name: "hotel_path",
       title: "Hotel Path",
       type: "string"
    },
    { 
       name: "pincode",
       title: "Pincode",
       type: "string"
    },
    { 
       name: "latitude",
       title: "Latitude", 
       type: "string"
    },
    {  
       name: "longitude", 
       title: "Longitude", 
       type: "string"
    },
    { 
       name: "legal_entity", 
      title: "Legal Entity", 
      type: "string"
    },
    { 
       name: "pms_name",
       title: "Pms Name",
       type: "string"
    },
    {  
       name: "location",
       title: "Location", 
       type: "string"
    },
    { 
       name: "rating",
       title: "Rating",
       type: "number"
    },
    { 
       name: "aminities",
       title: "Aminities",
       type: "string"
    },
    {
       name: "images",
       title: "Images",
       type: "array",
       of: [{ type: "string" }],
    },
    { 
       name: "phoneNumber",
       title: "Phone Number",
       type: "number"
    },
    { 
       name: "restaurantType",
       title: "Restaurant Type",
       type: "string"
    },
    { 
       name: "menuLink",
       title: "Menu Link",
       type: "string"
    },
    { 
       name: "timings",
       title: "Timings",
       type: "number"
    },
    { 
       name: "dressCode",
       title: "Dress Code",
       type: "string"
    },
    { 
       name: "cuisines",
       title: "Cuisines",
       type: "string"
    },
    { 
       name: "therapies",
       title: "Therapies",
       type: "number"
    },
    { 
       name: "long_description",
       title: "Long Description",
       type: "string"
    },
    { 
       name: "short_description",
       title: "Short Description",
       type: "string"
    },
  ],
};
