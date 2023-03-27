import { FeatureSchemaDefinition } from "schemas/types";
import hotel from "./hotel";
import hotelDetails from "./hotelDetails";

export const hotels: FeatureSchemaDefinition = {
  schemas: [hotel,hotelDetails],
};
