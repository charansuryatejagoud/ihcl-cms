import { FeatureSchemaDefinition } from "../types";
import serpProductList from "./serpProductList";
import serpSortConfiguration from "./serpSortConfiguration";
export const serp: FeatureSchemaDefinition = {
  pageItems: [{ type: "serp.productList" }],
  connectedStores: [
    {
      value: "serp.plp.store",
      title: "[SERP] Search Store",
    },
  ],
  headers: [{ type: "serp.plpSortConfiguration" }],
  footers: [],
  schemas: [serpProductList, serpSortConfiguration],
  groupItems: [],
  variants: {
    navigation: [{ title: "Serp AppBar", value: "serp.appbar" }],
    placeholder: [],
    group: [],
    ifElseBlock: [],
  },
};
