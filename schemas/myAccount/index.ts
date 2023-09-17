import { FeatureSchemaDefinition } from "schemas/types";
import cancellationDropdown from "./cancellationDropdown";

export const myAccount: FeatureSchemaDefinition = {
  schemas: [cancellationDropdown],
  connectedStores: [
    {
      title: "[My Account] My Account Store",
      value: "myAccount.stores.my-account-store",
    },
  ],
  customItems: [
    {
      type: "cancellationDropdown",
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
      {
        title: "[My Account] Modify Booking Details",
        value: "myAccount.group.modify-booking-details",
      },
      {
        title: "[My Account] Title with SubHeader",
        value: "myAccount.group.title-with-subHeader",
      },
      {
        title: "[My Account] Change Booking Confirmed",
        value: "myAccount.group.change-booking-confirmed",
      },
      {
        title: "[My Account] Gift Card viewer",
        value: "myAccount.group.gift-card-viewer",
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
      {
        title: "[My Account] Booking Change Dates",
        value: "myAccount.placeholders.booking-change-dates",
      },
      {
        title: "[My Account] Claim Missing Points",
        value: "myAccount.placeholders.claim-missing-points",
      },
      {
        title: "[My Account] Hotel Booking Overview",
        value: "myAccount.placeholders.hotel-booking-overview",
      },
      {
        title: "[My Account] Vouchers Overview",
        value: "myAccount.placeholders.vouchers-overview",
      },
      {
        title: "[My Account] Offers & Benefits Overview",
        value: "myAccount.placeholders.offers-and-benefits-overview",
      },
      {
        title: "[My Account] Gift Cards Overview",
        value: "myAccount.placeholders.gift-cards-overview",
      },
      {
        title: "[My Account] Membership Type Overview",
        value: "myAccount.placeholders.membership-type-overview",
      },
      {
        title: "[My Account] Booking Cancellation",
        value: "myAccount.placeholders.booking-cancellation",
      },
      {
        title: "[My Account] Booking Change Rooms",
        value: "myAccount.placeholders.booking-change-rooms",
      },
      {
        title: "[MyAccount] Email OTP Verification",
        value: "myAccount.placeholders.email-otp-verification",
      },
      {
        title: "[MyAccount] Hotels Rooms",
        value: "myAccount.placeholders.hotels-rooms",
      },
      {
        title: "[MyAccount] Confirm Room Price Breakup",
        value: "myAccount.placeholders.confirm-room-price-breakup",
      },
      {
        title: "[My Account] Change Room Packages",
        value: "myAccount.placeholders.hotels-packages",
      },
      {
        title: "[My Account] Change Rooms Cart View",
        value: "myAccount.placeholders.change-rooms-cart-view",
      }
    ],
    tabs: [
      {
        title: "[My Account] Account and Preferences Tabs",
        value: "myAccount.tabs.account-and-preferences-tabs",
      },
      {
        title: "[My Account] Manage Gift Card",
        value: "myAccount.tabs.manage-gift-card",
      },
      {
        title: "[My Account] Find Booking Tabs",
        value: "myAccount.tabs.find-booking-tabs",
      },
    ],
    stepper: [
      {
        title: "[My Account] Change Rooms Stepper",
        value: "myAccount.stepper.default",
      },
    ],
    forms: [
      {
        title: "[My Account] Stay Reservation Details",
        value: "myAccount.forms.stay-reservation-details",
      },
      {
        title: "[My Account] Dining Reservation Details",
        value: "myAccount.forms.dining-reservation-details",
      },
    ],
    nudge:[
      {
        title:"[My Account] Alert Message With Two Buttons",
        value:"myAccount.nudge.alert-message-with-two-buttons"
      },
      {
        title:"[My Account] Alert Message With Middle Aligned Button",
        value:"myAccount.nudge.alert-message-with-middle-aligned-button"
      }
    ]
  },
};
