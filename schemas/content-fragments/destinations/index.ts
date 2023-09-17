import { FeatureSchemaDefinition } from "schemas/types";
import destination from "./destination";
import about from "./about";
import tabInfo from "./tabInfo";
import destinationSeoInfo from "./destinationSeoInfo";
import destinationNavigation from "./destinationNavigation/destinationNavigation";

export const destinations: FeatureSchemaDefinition = {
  schemas: [destination, about, tabInfo, destinationSeoInfo, destinationNavigation],
};
