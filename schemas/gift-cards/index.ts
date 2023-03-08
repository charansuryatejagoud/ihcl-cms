import { FeatureSchemaDefinition } from "schemas/types";

export const giftCards: FeatureSchemaDefinition = {
  connectedStores: [
    {
      title: "[Gift Card] FormDetails Store",
      value: "giftCards.formDetails-store",
    },
    {
      title: "[Gift Card] Manage Gift Card",
      value: "giftCards.manage-gift-card",
    },
  ],
  variants: {},
};
