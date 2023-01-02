import authForm from "./form";
import { FeatureSchemaDefinition } from "../types";

export const auth: FeatureSchemaDefinition = {
  pageItems: [{ type: "auth.form" }],
  schemas: [authForm],
};
