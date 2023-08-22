import {
  brandNames
} from "../../constants";

export default {
  name: "hotel",
  title: "Hotels",
  type: "document",
  fields: [
    {
      name: "hotelName",
      title: "Name",
      type: "string",
    },
    {
      name: "hotelId",
      title: "Id",
      type: "string",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "brandName",
      title: "Brand Name",
      type: "string",
      options: { list: brandNames },
    },
    {
      name: "brandId",
      title: "Brand Id",
      type: "string",
    },
    {
      name: "hotelDescription",
      title: "Description",
      type: "string",
    },
    {
      name: "hotelPath",
      title: "URL",
      type: "string",
    },
    {
      name: "gcCategory",
      title: "Gift Card Category",
      type: "reference",
      to: [{ type: "giftCardsDetails" }],
    },
    {
      name: "searchTaxonomies",
      title: "Taxonomies",
      type: "reference",
      to: [{ type: "taxonomyInfo" }],
    },
    {
      name: "hotelSubType",
      title: "Sub Type",
      type: "string",
    },
    {
      name: "hotelBannerTitle",
      title: "Hotel Banner Title",
      type: "title",
    },
    {
      name: "hotelOverview",
      title: "Overview",
      type: "reference",
      to: [{ type: "overview" }],
    },
    {
      name: "hotelAddress",
      title: "Address",
      type: "reference",
      to: [{ type: "address" }],
    },
    {
      name: "hotelContact",
      title: "Contact",
      type: "reference",
      to: [{ type: "contact" }],
    },
    {
      name: "hotelAvailability",
      title: "Hotel Information",
      type: "reference",
      to: [{ type: "availability" }],
    },
    {
      name: "hotelFacilities",
      title: "Facilities",
      type: "reference",
      to: [{ type: "facilities" }],
    },
    {
      name: "hotelAwards",
      title: "Awards",
      type: "reference",
      to: [{ type: "awards" }],
    },
    {
      name: "hotelSocialInfo",
      title: "Social Info",
      type: "reference",
      to: [{ type: "socialInfo" }],
    },
    {
      name: "hotelRooms",
      title: "Rooms",
      type: "reference",
      to: [{ type: "rooms" }],
    },
    {
      name: "hotelHighlights",
      title: "Highlights",
      type: "reference",
      to: [{ type: "highlights" }],
    },
    {
      name: "hotelExclusiveOffersDining",
      title: "Exclusive Offers(Dining)",
      type: "reference",
      to: [{ type: "exclusiveOffers" }],
    },
    {
      name: "hotelExclusiveOffersWellness",
      title: "Exclusive Offers(Wellness)",
      type: "reference",
      to: [{ type: "exclusiveOffers" }],
    },
    {
      name: "hotelExclusiveOffersRooms",
      title: "Exclusive Offers(Rooms)",
      type: "reference",
      to: [{ type: "exclusiveOffers" }],
    },
    {
      name: "hotelOffers",
      title: "Offers",
      type: "reference",
      to: [{ type: "offers" }],
    },
    {
      name: "hotelHolidays",
      title: "Holidays",
      type: "reference",
      to: [{ type: "holidays" }],
    },
    {
      name: "hotelSignatureDining",
      title: "Signature Dining",
      type: "reference",
      to: [{ type: "signatureDining" }],
    },
    {
      name: "hotelEventVenues",
      title: "Event Venues",
      type: "reference",
      to: [{ type: "venues" }],
    },
    {
      name: "hotelWellness",
      title: "Wellness",
      type: "reference",
      to: [{ type: "wellness" }],
    },
    {
      name: "hotelExperiences",
      title: "Experiences",
      type: "reference",
      to: [{ type: "experiences" }],
    },
    {
      name: "hotelGallery",
      title: "Gallery",
      type: "reference",
      to: [{ type: "gallery" }],
    },
    {
      name: "hotelAttractions",
      title: "Attractions",
      type: "reference",
      to: [{ type: "attractions" }],
    },
    {
      name: "hotelDocuments",
      title: "Hotel Documents",
      description: "Documents supported are PDF and DOCX.",
      type: "array",
      of: [{ type: "fileDocument" }],
    }
  ],
};
