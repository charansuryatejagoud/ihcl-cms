import { FeatureSchemaDefinition } from "schemas/types";
import hotel from "./hotel";
import contact from "./contact";
import gallery from "./gallery";
import wellness from "./wellness/wellness";
import rooms from "./rooms/rooms";
import holidays from "./holidays";
import experiences from "./experiences";
import exclusiveOffers from "./offers/exclusiveOffers";
import diningDetails from "./dining/diningInfo";
import attractions from "./attractions/attractions";
import holidayDetails from "./holidayInfo";
import socialInfo from "./socialInfo";
import venues from "./venues/venues";
import weddingEventDetails from "./venues/weddingEventInfo";
import rateCodes from "./rateCodes";
import eventVenues from "./venues/venuesAndOccasions";
import eventVenueDetails from "./venues/venueAndOccasionInfo";
import spaDetails from "./wellness/spaInfo";
import signatureTreatments from "./wellness/treatments";
import roomDetails from "./rooms/roomInfo";
import signatureDining from "./dining/signatureDining";
import overview from "./overview/overview";
import availability from "./overview/availability";
import highlights from "./overview/highlights";
import facilityDetails from "./overview/facilityInfo";
import facilities from "./overview/facilities";
import address from "./overview/address";
import awards from "./awards/awards";
import offers from "./offers/offers";
import offerDetails from "./offers/offerInfo";
import exclusiveOffersDetails from "./offers/exclusiveOffersInfo";
import modalDetails from "./rooms/modalDetails";
import categories from "../categories";
import media from "../mediaInput";
import basicInfo from "../basicDetails";
import wellnessDetails from "./wellness/wellnessInfo";
import title from "../../commonUtils/title";

export const hotels: FeatureSchemaDefinition = {
  schemas: [
    hotel,
    overview,
    address,
    availability,
    contact,
    gallery,
    wellness,
    attractions,
    spaDetails,
    signatureTreatments,
    signatureDining,
    rooms,
    offers,
    holidays,
    highlights,
    facilities,
    experiences,
    exclusiveOffers,
    eventVenues,
    awards,
    roomDetails,
    diningDetails,
    offerDetails,
    basicInfo,
    holidayDetails,
    exclusiveOffersDetails,
    eventVenueDetails,
    socialInfo,
    venues,
    facilityDetails,
    weddingEventDetails,
    rateCodes,
    modalDetails,
    categories,
    media,
    wellnessDetails,
  ],
};
