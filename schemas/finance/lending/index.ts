import { FeatureSchemaDefinition } from "../../types";

export const financeLending: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [
    {
      value: "finance.lending.cardSummary.store",
      title: "[Finance Lending] Card Summary Store",
    },
  ],
  headers: [],
  footers: [],
  schemas: [],
  groupItems: [],
  variants: {
    navigation: [],
    card: [],
    placeholder: [
      {
        value: "finance.lending.cardSummary",
        title: "[Finance Lending] Card Summary",
      },
    ],
    group: [],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
