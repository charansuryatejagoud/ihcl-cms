import { FeatureSchemaDefinition } from "schemas/types";
import restaurant from "./restaurant";
import restaurantDetails from "./restaurantDetails";

export const restaurants: FeatureSchemaDefinition = {
  schemas: [restaurant, restaurantDetails],
};
