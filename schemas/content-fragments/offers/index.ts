import { FeatureSchemaDefinition } from "schemas/types";
import offerPackages from "./offerPackages";
import offerThemes from "./offerThemes";
import dateRange from "../dateRange";

export const offersAndPromotions: FeatureSchemaDefinition = {
  schemas: [offerPackages, offerThemes, dateRange],
};
