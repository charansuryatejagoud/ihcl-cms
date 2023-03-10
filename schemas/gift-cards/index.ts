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
  variants: {
    card: [
      {
        title: "[Gift Card] Check Balance Form",
        value: "giftCards.card.check-balance-form",
      },
      {
        title: "[Gift Card] Reload Balance Form",
        value: "giftCards.card.reload-balance-form",
      },
      {
        title: "[Gift Card] Card Order Status Form",
        value: "giftCards.card.order-status-form",
      },
    ],
    tabs: [
      {
        title: "[Gift Card] Manage Card Multiple Tabs",
        value: "giftCards.tabs.manage-card-multiple-tabs",
      },
    ],
  },
};
