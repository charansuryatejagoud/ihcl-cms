export default {
  name: "searchBodyParams",
  title: "Search Body Params",
  type: "document",
  fields: [
    { name: "hotel_name", title: "Hotel Name", type: "string" },
    { name: "hotel_id", title: "Hotel ID", type: "string" },
    { name: "hotel_code", title: "Hotel Code", type: "string" },
    { name: "hotel_type", title: "Hotel Type", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "ihcl_hotel_key", title: "IHCL Hotel Key", type: "number" },
    { name: "brand_name", title: "Brand Name", type: "string" },
    { name: "brand_key", title: "Brand Key", type: "number" },
    { name: "country", title: "Country", type: "string" },
    { name: "state", title: "State", type: "string" },
    { name: "region_key", title: "Region Key", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "hotel_path", title: "Hotel Path", type: "string" },
    { name: "pincode", title: "Pincode", type: "string" },
    { name: "latitude", title: "Latitude", type: "string" },
    { name: "longitude", title: "Longitude", type: "string" },
    { name: "legal_entity", title: "Legal Entity", type: "string" },
    { name: "pms_name", title: "Pms Name", type: "string" },
    { name: "location", title: "Location", type: "string" },
     { name: "rating", title: "Rating", type: "number" },
    // { name: "rating", title: "Rating", type: "string" },
    { name: "aminities", title: "Aminities", type: "string" },
    { name: "categoryType", title: "Category Type", type: "string" },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "phoneNumber", title: "Phone Number", type: "number" },
    { name: "restaurantType", title: "Restaurant Type", type: "string" },
    { name: "menuLink", title: "Menu Link", type: "string" },
    { name: "timings", title: "Timings", type: "string" },
    { name: "dressCode", title: "Dress Code", type: "string" },
    { name: "cuisines", title: "Cuisines", type: "string" },
    { name: "therapies", title: "Therapies", type: "number" },
    { name: "long_description", title: "Long Description", type: "string" },
    { name: "short_description", title: "Short Description", type: "string" },
    { name: "active_ind", title: "Active Ind", type: "boolean" },
    { name: "added_date", title: "Added Date", type: "string" },
    { name: "currency", title: "Currency", type: "string" },
    { name: "epicure_flag", title: "Epicure Flag", type: "string" },
    { name: "highlights", title: "Highlights", type: "string" },
    { name: "hotel_pms_code", title: "Hotel Pms Code", type: "string" },
    { name: "longDescription", title: "Long Description", type: "string" },
    { name: "non_orion_flag", title: "Non Orion Flag", type: "string" },
    { name: "orion_code", title: "Orion Code", type: "string" },
    { name: "pos_type", title: "Pos Type", type: "string" },
    { name: "shortDescription", title: "Short Description", type: "string" },
    { name: "siebel_code", title: "Siebel Code", type: "string" },
    { name: "status", title: "Status", type: "string" },
    { name: "synxis_hotel_id", title: "Synxis Hotel Id", type: "number" },
    { name: "tic_flag", title: "Tic Flag", type: "string" },
    { name: "updated_date", title: "Updated Date", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "business_email", title: "Business Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "pos", title: "Pos", type: "string" },
    { name: "support_email", title: "Support Email", type: "string" },
  ],
  preview: {
    select: { name: "hotel_name", id: "hotel_id", code: "hotel_code" },
    prepare({ name, id, code }) {
      return {
        title: `${name}`,
        subtitle: `Code: ${code || ""} , ID: ${id || ""}`,
      };
    },
  },
};
