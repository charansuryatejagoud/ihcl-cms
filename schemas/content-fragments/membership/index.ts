import { FeatureSchemaDefinition } from "schemas/types";
import epicure from "./epicure";
import applicableBenefits from "./applicableBenefits";
import columnData from "./columnData";

export const membership: FeatureSchemaDefinition = {
  schemas: [epicure, applicableBenefits, columnData],
};
