import { addressTypes } from "../utility";

export default {
  title:"Address",
    name: 'address',
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "type",
        title: "Type",
        type: "string",
        options: {list:addressTypes}
      },
      {
        name: "sectionTitle",
        title: "Section Title",
        type: "title",
      },
      {
        name: "addressLine1",
        title: "Adddress Line 1",
        type: "string",
      },
      {
        name: "addressLine2",
        title: "Adddress Line 2",
        type: "string",
      },
      {
        name: "landmark",
        title: "Landmark",
        type: "string",
      },
      {
        name: "street",
        title: "Street",
        type: "string",
      },
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
        name: "locality",
        title: "Locality",
        type: "string",
      },
      {
        name: "pincode",
        title: "Pincode",
        type: "number",
      },
      {
        name: "latitude",
        title: "Latitude",
        type: "string",
      },
      {
        name: "longitude",
        title: "Longitude",
        type: "string",
      },
    ],
}