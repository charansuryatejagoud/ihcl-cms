import { FeatureSchemaDefinition } from "schemas/types";

export const myAccount: FeatureSchemaDefinition = {
  connectedStores: [
    {
      title: "[My Account] My Account Store",
      value: "myAccount.stores.my-account-store",
    },
  ],
  variants: {
    group: [
      {
        title: "[My Account] Section Specific Details",
        value: "myAccount.group.section-specific-details",
      },
    ],
    card: [
      {
        title: "[My Account] Personal Details",
        value: "myAccount.card.personal-details",
      },
    ],
    placeholder: [
      {
        title: "[My Account] Section Wise Data",
        value: "myAccount.placeholders.section-wise-Data",
      },
    ],
    tabs: [
      {
        title: "[My Account] Account and Preferences Tabs",
        value: "myAccount.tabs.account-and-preferences-tabs",
      },
    ],
  },
};
