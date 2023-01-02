import { FeatureSchemaDefinition } from "../types";
import searchAutocompleteList from "./search-autocomplete.list";

export const search: FeatureSchemaDefinition = {
  pageItems: [{ type: "search.autocompleteList" }],
  connectedStores: [
    {
      value: "search.store",
      title: "[SEARCH] Autocomplete Store",
    },
  ],
  headers: [],
  footers: [],
  schemas: [searchAutocompleteList],
  groupItems: [],
  variants: {
    navigation: [{ title: "[SEARCH]search AppBar", value: "search.global.appbar" }],
    placeholder: [],
    group: [],
    ifElseBlock: [],
  },
};
