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
      {
        title: "[My Account] Account Tabs List",
        value: "myAccount.group.account-tabs-list",
      },
      {
        title: "[My Account] Overview Viewer",
        value: "myAccount.group.overview-viewer",
      },
      {
         title: "[My Account] Email Communication",
         value: "myAccount.group.email-communication",
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
      {
        title: "[My Account] Vouchers Viewer",
        value: "myAccount.placeholders.vouchers-viewer",
      },
      {
        title: "[My Account] Gift Card viewer",
        value: "myAccount.placeholders.gift-card-viewer",
      },
      {
        title: "[My Account] Transactions Summary",
        value: "myAccount.placeholders.transactions-summary",
      },
      {
        title: "[My Account] Preference Management",
        value: "myAccount.placeholders.preference-management",
      },
      {
        title: "[My Account] Email Communication Details",
        value: "myAccount.placeholders.email-communication-details",
      },
      {
        title: "[My Account] Membership Cards Viewer",
        value: "myAccount.placeholders.membership-cards-viewer",
      },
      {
        title: "[My Account] Bookings Viewer",
        value: "myAccount.placeholders.bookings-viewer",
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
