import { FeatureSchemaDefinition } from "schemas/types";
import offerPackages from "./offerPackages";
import offerThemes from "./offerThemes";

export const offersAndPromotions: FeatureSchemaDefinition = {
  schemas: [offerPackages, offerThemes],
};
