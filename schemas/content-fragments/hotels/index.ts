import { FeatureSchemaDefinition } from "schemas/types";
import hotel from "./hotel";
import hotelDetails from "./hotelDetails";
import address from "./address";
import availability from "./availability";
import contact from "./contact";
import gallery from "./gallery";
import wellness from "./wellness";
import spaDetails from "./spaDetails";
import signatureTreatments from "./signatureTreatments";
import signatureDining from "./signatureDining";
import rooms from "./rooms";
import offers from "./offers";
import holidays from "./holidays";
import highlights from "./highlights";
import facilities from "./facilities";
import experiences from "./experiences";
import exclusiveOffers from "./exclusiveOffers";
import eventVenues from "./eventVenues";
import awards from "./awards";
import perfectEvent from "./perfectEvent";
import roomDetails from "./roomDetails";
import diningDetails from "./diningDetails";
import specifications from "./specifications";
import offerDetails from "./offerDetails";
import attractions from "./attractions";
import attractionDetails from "./attractionDetails";
import signatureTreatmentDetails from "./signatureTreatmentDetails";
import holidayDetails from "./holidayDetails";
import experienceDetails from "./experienceDetails";
import exclusiveOffersDetails from "./exclusiveOffersDetails";
import eventVenueDetails from "./eventVenueDetails";
import awardDetails from "./awardDetails";
import socialInfo from "./socialInfo";
import venues from "./venues";
import facilityDetails from "./facilityDetails";
import highlightDetails from "./highlightDetails";
import weddingEventDetails from "./weddingEventDetails";
import rateCodes from "./rateCodes";

export const hotels: FeatureSchemaDefinition = {
  schemas: [hotel, hotelDetails, address, availability, contact, gallery, wellness, attractions,
    spaDetails, signatureTreatments, signatureDining, rooms, offers, holidays, highlights,
    facilities, experiences, exclusiveOffers, eventVenues, awards, perfectEvent, roomDetails,
    diningDetails, specifications, offerDetails, attractionDetails, signatureTreatmentDetails,
    holidayDetails, experienceDetails, exclusiveOffersDetails, eventVenueDetails, awardDetails,
    socialInfo, venues, facilityDetails, highlightDetails, weddingEventDetails, rateCodes],
};
