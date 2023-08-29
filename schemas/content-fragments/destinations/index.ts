import { FeatureSchemaDefinition } from "schemas/types";
import destination from "./destination";
import about from "./about";
import tabInfo from "./tabInfo";

export const destinations: FeatureSchemaDefinition = {
  schemas: [destination, about, tabInfo],
};
