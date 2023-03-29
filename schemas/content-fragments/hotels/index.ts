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

export const hotels: FeatureSchemaDefinition = {
  schemas: [hotel,hotelDetails, address, availability, contact, gallery, wellness,
  spaDetails, signatureTreatments,signatureDining, rooms, offers, holidays, highlights,
  facilities, experiences, exclusiveOffers, eventVenues, awards, perfectEvent,roomDetails],
};
