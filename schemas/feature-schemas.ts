import {
  FeatureSchemaDefinition,
  FeatureSchemaProperties,
  VariantSchemaProperties,
} from "./types";
import { chain } from "lodash";
import { core } from "./core";
import { ihclForms } from "./ihcl-forms";
import { loyalty } from "./ihcl-loyalty";
import { details } from "./hotel-details";
import { ihclcore } from "./ihcl";
import { destinations } from "./destinations";
import { bookings } from "./bookings";
import solarDetails from "./search/searchBodyParams";
import { search } from "./search";
import { Authentication } from "./Authentication";

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
