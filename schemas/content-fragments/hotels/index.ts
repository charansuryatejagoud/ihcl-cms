import { FeatureSchemaDefinition } from "schemas/types";
import hotel from "./hotel";
import contact from "./contact";
import gallery from "./gallery";
import wellness from "./wellness/wellness";
import rooms from "./rooms/rooms";
import holidays from "./holidays";
import experiences from "./experiences";
import exclusiveOffers from "./offers/exclusiveOffers";
import diningDetails from "./dining/diningDetails";
import specifications from "./specifications";
import attractions from "./attractions/attractions";
import holidayDetails from "./holidayDetails";
import experienceDetails from "./experienceDetails";
import awardDetails from "./awards/awardDetails";
import socialInfo from "./socialInfo";
import venues from "./venues/venues";
import weddingEventDetails from "./venues/weddingEventDetails";
import rateCodes from "./rateCodes";
import eventVenues from "./venues/eventVenues";
import perfectEvent from "./venues/perfectEvent";
import eventVenueDetails from "./venues/eventVenueDetails";
import spaDetails from "./wellness/spaDetails";
import signatureTreatments from "./wellness/signatureTreatments";
import signatureTreatmentDetails from "./wellness/signatureTreatmentDetails";
import roomDetails from "./rooms/roomDetails";
import signatureDining from "./dining/signatureDining";
import hotelDetails from "./overview/hotelDetails";
import availability from "./overview/availability";
import highlights from "./overview/highlights";
import attractionDetails from "./attractions/attractionDetails";
import highlightDetails from "./overview/highlightDetails";
import facilityDetails from "./overview/facilityDetails";
import facilities from "./overview/facilities";
import address from "./overview/address";
import awards from "./awards/awards";
import offers from "./offers/offers";
import offerDetails from "./offers/offerDetails";
import exclusiveOffersDetails from "./offers/exclusiveOffersDetails";
import title from "../title";

export const hotels: FeatureSchemaDefinition = {
  schemas: [hotel, hotelDetails, address, availability, contact, gallery, wellness, attractions,
    spaDetails, signatureTreatments, signatureDining, rooms, offers, holidays, highlights,
    facilities, experiences, exclusiveOffers, eventVenues, awards, perfectEvent, roomDetails,
    diningDetails, specifications, offerDetails, attractionDetails, signatureTreatmentDetails,
    holidayDetails, experienceDetails, exclusiveOffersDetails, eventVenueDetails, awardDetails,
    socialInfo, venues, facilityDetails, highlightDetails, weddingEventDetails, rateCodes, title],
};
