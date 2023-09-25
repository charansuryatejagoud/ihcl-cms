import { FeatureSchemaDefinition } from "schemas/types";
import epicure from "./epicure";
import applicableBenefits from "./applicableBenefits";

export const membership: FeatureSchemaDefinition = {
  schemas: [epicure, applicableBenefits],
};
