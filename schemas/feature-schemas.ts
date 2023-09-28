import {
  FeatureSchemaDefinition,
  FeatureSchemaProperties,
  VariantSchemaProperties,
} from "./types";
import { chain } from "lodash";
import { core } from "./core";
import { ihclForms } from "./forms";
import { loyalty } from "./loyalty";
import { details } from "./hotel-details";
import { ihclcore } from "./commonUtils";
import { bookings } from "./bookings";
import { search } from "./search";
import { Authentication } from "./authentication";
import { giftCards } from "./gift-cards";
import { partners } from "./partners";
import { businessServices } from "./business";
import { hotels } from "./content-fragments/hotels";
import { restaurants } from "./content-fragments/restaurants";
import { hampers } from "./content-fragments/hampers";
import { myAccount } from "./myAccount";
import { Offers } from "./offers";
import { aboutUs } from "./aboutUs";
import { events } from "./events";
import { holidays } from "./holidays"
import { notifications } from "./notifications";
import { offersAndPromotions } from "./content-fragments/offers";
import { appIcons } from "./content-fragments/appIcons";
import { destinations } from "./content-fragments/destinations";
import {membership} from "./content-fragments/membership";

const features: FeatureSchemaDefinition[] = [
  core,
  ihclcore,
  ihclForms,
  Authentication,
  details,
  loyalty,
  destinations,
  bookings,
  search,
  giftCards,
  partners,
  businessServices,
  hotels,
  restaurants,
  hampers,
  myAccount,
  Offers,
  holidays,
  aboutUs,
  events,
  notifications,
  offersAndPromotions,
  membership,
  appIcons
];

export const featureDefinition: FeatureSchemaDefinition =
  extractFeatures(features);

function extractFeatures(features: FeatureSchemaDefinition[]) {
  const featureDefKeys = Object.keys(new FeatureSchemaProperties());

  const combinedDefinition: FeatureSchemaDefinition = featureDefKeys.reduce(
    (allFeatures, property) => {
      switch (property) {
        case "variants":
          allFeatures["variants"] = extractVariants(features);
          break;

        default:
          allFeatures[property] = extractItems(features, (x) => x[property]);
          break;
      }

      return allFeatures;
    },
    <FeatureSchemaProperties>{},
  );

  return combinedDefinition;
}

function extractVariants(features: FeatureSchemaDefinition[]) {
  const variantDefKeys = Object.keys(new VariantSchemaProperties());

  return variantDefKeys.reduce((obj, key) => {
    obj[key] = extractItems(features, (x) => (x.variants ?? {})[key]);
    return obj;
  }, <VariantSchemaProperties>{});
}

function extractItems<T, U>(items: T[], iterator: (T) => U[]) {
  return chain(items)
    .flatMap(iterator)
    .filter((x) => !!x)
    .value();
}
