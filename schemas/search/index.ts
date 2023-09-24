import { FeatureSchemaDefinition } from "schemas/types";
import searchBodyParams from "./searchBodyParams";
import searchConfig from "./searchConfig";

export const search: FeatureSchemaDefinition = {
    schemas: [
        searchBodyParams,
        searchConfig
    ]
}