import { FeatureSchemaDefinition } from "schemas/types";

export const bookings: FeatureSchemaDefinition = {
  variants: {
    stepper: [
      {
        title: "Booking Stepper",
        value: "bookings.stepper.default",
      },
    ],
    switchCaseBlock: [
      {
        title: "Bookings",
        value: "bookings.switchCaseBlock.default",
      },
    ],
    placeholder: [
      {
        title: "[Bookings] Hotels Rooms",
        value: "bookings.placeholders.hotels-rooms",
      },
      {
        title: "[Bookings] Cart View",
        value: "bookings.placeholders.cart-view",
      },
      {
        title: "[Bookings] Primary Guest Details",
        value: "bookings.placeholders.primary-guest-details",
      },
      {
        title: "[Bookings] Addons",
        value: "bookings.placeholders.addons",
      },
      {
        title: "[Bookings] Redeem & Save",
        value: "bookings.placeholders.redeem-save",
      },
      {
        title: "[Bookings] Payment details",
        value: "bookings.placeholders.payment-details",
      },
    ],
    tabs: [
      {
        title: "[Bookings] Bookings Tabs",
        value: "bookings.tabs.bookings",
      },
      {
        title: "[Bookings] Bookings Payments Tabs",
        value: "bookings.tabs.bookings-payments",
      },
    ],
  },
};
