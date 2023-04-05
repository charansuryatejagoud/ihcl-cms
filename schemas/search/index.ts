import { FeatureSchemaDefinition } from "schemas/types";
import searchBodyParams from "./searchBodyParams";

export const search: FeatureSchemaDefinition = {
    schemas: [
        searchBodyParams
    ],
    connectedStores: [
        {
          title: "[Search ] Search Results",
          value: "search.search-results",
        },
    ]
}