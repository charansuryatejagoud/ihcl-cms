import { FeatureSchemaDefinition } from "schemas/types";
import destination from "./destination";
import about from "./about";
import tabInfo from "./tabInfo";
import destinationSeoInfo from "./destinationSeoInfo";
import destinationNavigation from "./destinationNavigation/destinationNavigation";
import country from "./country";

export const destinations: FeatureSchemaDefinition = {
  schemas: [destination, country, about, tabInfo, destinationSeoInfo, destinationNavigation],
};
