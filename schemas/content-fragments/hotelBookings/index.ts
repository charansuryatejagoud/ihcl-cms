import { FeatureSchemaDefinition } from "schemas/types";
import confirmation from "./confirmation";
import guestDetails from "./guestDetails";
import itinerary from "./itinerary";
import landing from "./landing";
import payOptions from "./payOptions";
import paymentMethods from "./paymentMethods";
import rateType from "./rateType";
import reservation from "./reservation";
import roomInfo from "./roomInfo";
import roomOffer from "./roomOffer";
import roomOfferDetails from "./roomOfferDetails";
import payOptionsDetails from "./payOptionsDetails";
import payment from "./payment";

export const hotelBookings: FeatureSchemaDefinition = {
    schemas: [landing, reservation, confirmation, roomInfo, roomOffer, guestDetails, payOptions, paymentMethods, 
    itinerary, rateType, roomOfferDetails, payment, payOptionsDetails],
  };
    