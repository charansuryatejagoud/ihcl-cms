import { FeatureSchemaDefinition } from "schemas/types";
import restaurant from "./restaurant";
import restaurantDetails from "./restaurantDetails";
import restaurantBrand from "../restaurantBrand/restaurantBrand";

export const restaurants: FeatureSchemaDefinition = {
  schemas: [restaurant, restaurantDetails, restaurantBrand],
};
