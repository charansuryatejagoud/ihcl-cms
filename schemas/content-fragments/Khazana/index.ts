import { FeatureSchemaDefinition } from "schemas/types";
import products from "./products";
import productDetail from "./productDetail";

export const khazana: FeatureSchemaDefinition = {
  schemas: [products, productDetail],
};
