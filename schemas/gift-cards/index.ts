import { FeatureSchemaDefinition } from "schemas/types";

export const giftCards: FeatureSchemaDefinition = {
  connectedStores: [
    {
      title: "[Gift Card] Confirmation Page Store",
      value: "giftCards.confirmationPage-store",
    },
    {
      title: "[Gift Card] Manage Gift Card",
      value: "giftCards.manage-gift-card",
    },
    {
      title: "[Gift Card] FormDetails Store",
      value: "giftCards.formDetails-store",
    },
    {
      title: "[Gift Card] Balance Reload",
      value: "giftCards.connectedStores.balance-reload",
    },
  ],
  variants: {
    card: [
      {
        title: "[Gift Card] Bottom media with Top content",
        value: "giftCards.card.bottom-media-with-top-content",
      },
      {
        title: "[Gift Card] Bottom media with Top Center aligned Action",
        value: "giftCards.card.bottom-media-with-top-center-aligned-action",
      },
      {
        title: "[Gift Card] Member Purchase Details With Cta",
        value: "giftCards.card.member-purchase-details-with-cta",
      },
      {
        title: "[Gift Card] Square Card With Profile",
        value: "giftCards.card.square-card-with-profile",
      },
    ],
    group: [
      {
        title: "[Gift Card] Failure Status",
        value: "giftCards.group.failure-status",
      },
      {
        title: "[Gift Card] Horizontal Tabs",
        value: "giftCards.group.horizontal-tabs",
      },
      {
        title: "[Gift Card] Successful Purchase",
        value: "giftCards.group.successful-purchase",
      },
      {
        title: "[Gift Card] 2x3 Grid",
        value: "giftCards.group.2-by-3-grid",
      },
    ],

    tabs: [
      {
        title: "[Gift Card] Manage Card Multiple Tabs",
        value: "giftCards.tabs.manage-card-multiple-tabs",
      },
    ],
    forms: [
      {
        title: "[Gift Card] Participating Hotel Search",
        value: "giftCards.form.participating-hotel-search",
      },
      {
        title: "[Gift Card] Member Purchase Details with CTA",
        value: "giftCards.form.member-purchase-details-with-cta",
      },
      {
        title: "[Gift Card] Check Balance Form",
        value: "giftCards.forms.check-balance-form",
      },
      {
        title: "[Gift Card] Reload Balance Form",
        value: "giftCards.forms.reload-balance-form",
      },
      {
        title: "[Gift Card] Card Order Status Form",
        value: "giftCards.forms.order-status-form",
      },
    ],
    dialog: [
      {
        title: "[Gift Card] Finding Participating Hotel Search Modal",
        value: "giftCards.dialog.finding-participating-hotel-search-modal",
      },
    ],
    placeholder: [
      {
        title: "[Gift Card] Reload Details",
        value: "giftCards.placeholders.reload-details",
      },
      {
        title: "[Gift Card] Reload Price Breakup",
        value: "giftCards.placeholders.reload-price-breakup",
      },
    ],
  },
};
