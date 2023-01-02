import { v4 as uuid } from "uuid";
import AutocompleteTagsComponent from "@components/AutocompleteTagsComponent";

const productMetadata = {
  name: "productMetadata",
  title: "Product Metadata",
  type: "object",
  fields: [
    {
      name: "brand",
      type: "string",
      title: "Brand",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "subCategory",
      type: "string",
      title: "Sub Category",
    },
  ],
};

export default {
  name: "metadata",
  title: "Metadata",
  type: "object",
  initialValue: {
    identifier: uuid(),
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "reportImmediately",
      type: "boolean",
      title: "Report Immediately",
      description:
        "This will make analytics event of this container to be sent immediately," +
        " instead of waiting for buffer to be flushed.",
    },
    {
      name: "identifier",
      type: "string",
      title: "Identifier",
      description:
        "A unique identifier/name that can be used in code, analytics and other system communication",
      readOnly: true,
    },
    {
      name: "contentType",
      type: "string",
      title: "Content Type",
      options: {
        list: [
          { value: "offer", title: "Offer" },
          { value: "neuCategory", title: "Neu Category" },
          { value: "brandCategory", title: "Brand Category" },
          { value: "feature", title: "Feature" },
          { value: "benefit", title: "Benefit" },
          { value: "content", title: "Content" },
          { value: "product", title: "Product" },
          { value: "property", title: "Property" },
          { value: "brand", title: "Brand" },
          { value: "subBrand", title: "Sub-Brand" },
          { value: "banner", title: "Banner" },
          { value: "multiContent", title: "Multiple Content" },
        ],
      },
    },
    {
      name: "contentSubType",
      type: "string",
      title: "Content Sub-Type",
      options: {
        list: [
          { value: "offer", title: "Offer" },
          { value: "video", title: "Video" },
          { value: "audio", title: "Audio" },
          { value: "gif", title: "GIF Image" },
          { value: "image", title: "Image (JPG, PNG)" },
        ],
      },
    },
    {
      name: "businessCategory",
      type: "string",
      title: "Business Category",
      description: "The business category for this content",
      options: {
        list: [
          { value: "grocery", title: "Grocery" },
          { value: "electronics", title: "Electronics" },
          { value: "mobiles", title: "Mobiles" },
          { value: "fashion", title: "Fashion" },
          { value: "beauty", title: "Beauty" },
          { value: "luxury", title: "Luxury" },
          { value: "hotels", title: "Hotels" },
          { value: "flights", title: "Flights" },
          { value: "food", title: "Food" },
          { value: "health", title: "Health" },
          { value: "entertainment", title: "Entertainment" },
          { value: "fitness", title: "Fitness" },
          { value: "jewellery", title: "Jewellery" },
          { value: "watches", title: "Watches" },
          { value: "eyewear", title: "Eyewear" },
        ],
      },
    },
    {
      name: "brand",
      type: "string",
      title: "Brand",
      options: {
        list: [
          { value: "bigBasket", title: "Big Basket" },
          { value: "croma", title: "Croma" },
          { value: "tataCliq", title: "Tata CliQ" },
          { value: "westside", title: "West Side" },
          { value: "airAsia", title: "Air Asia" },
          { value: "ihcl", title: "IHCL" },
          { value: "qmin", title: "QMin" },
          { value: "starbucks", title: "Starbucks" },
          { value: "tataPlay", title: "Tata Play" },
          { value: "oneMg", title: "1Mg" },
          { value: "cultFit", title: "Cult Fit" },
          { value: "multiBrand", title: "Multi Brand" },
          { value: "zipcare", title: "Zip Care" },
          { value: "tanishq", title: "Tanishq" },
          { value: "titan", title: "Titan" },
          { value: "mia", title: "Mia" },
          { value: "sonata", title: "Sonata" },
          { value: "fastrack", title: "Fastrack" },
          { value: "skinn", title: "Skinn" },
          { value: "taneira", title: "Taneira" },
          { value: "eyeplus", title: "Eyeplus" },
          { value: "tataaig", title: "Tata AIG" },
        ],
      },
    },
    {
      name: "journeyName",
      type: "string",
      title: "Journey Name",
    },
    productMetadata,
    {
      name: "tags",
      title: "Tags",
      description: "Use tags to define visual behavior, analytics, etc.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        frozen: false,
        preload: ["fixed", "flutter.only", "pwa.only"],
        closeMenuOnSelect: true,
      },
      inputComponent: AutocompleteTagsComponent,
    },
    {
      title: "Exclude child events?",
      name: "excludeChildEvents",
      description:
        "If selected, these events will not be reported in analytics",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Tap", value: "tap" },
          { title: "View", value: "view" },
        ],
      },
    },
    {
      title: "Start date",
      name: "startDate",
      type: "datetime",
    },
    {
      title: "End date",
      name: "endDate",
      type: "datetime",
    },
  ],
};
