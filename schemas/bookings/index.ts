import { FeatureSchemaDefinition } from "schemas/types";
export const bookings: FeatureSchemaDefinition = {
  connectedStores: [
    {
      title: "[Bookings] Booking Store",
      value: "bookings.store",
    },
  ],
  variants: {
    stepper: [
      {
        title: "[Bookings] Booking Stepper",
        value: "bookings.stepper.default",
      },
    ],
    switchCaseBlock: [
      {
        title: "Bookings",
        value: "bookings.switchCaseBlock.default",
      },
      {
        title: "Hotel Booking Confirmation",
        value: "bookings.switchCaseBlock.booking-confirmation",
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
      {
        title: "[Bookings] Booking Confirmed Guest Details",
        value: "bookings.placeholders.confirmed-guest-details",
      },
      {
        title: "[Bookings] Booking Confirmed Room Details",
        value: "bookings.placeholders.confirmed-room-details",
      },
      {
        title: "[Bookings] Other Guest Details",
        value: "bookings.placeholders.other-guest-details",
      },
      {
        title: "[Bookings] Loyalty Product Price Details",
        value: "bookings.placeholders.loyalty-product-price-details",
      },
      {
        title: "[Bookings] Booking Mask Modal",
        value: "bookings.placeholders.booking-mask-modal",
      },
      {
        title: "[Bookings] Bottom Navigation Cart Details",
        value: "bookings.placeholders.bottom-navigation-cart-details",
      }
    ],
    nudge: [
      {
        title: "[Bookings] Checking Hotel Room Rates",
        value: "bookings.nudge.checking-hotel-room-rates",
      },
    ],
    group: [
      {
        title: "[Bookings] Grid Wrapper",
        value: "bookings.group.grid-wrapper",
      },
      {
        title: "[Bookings] Booking Payment Return",
        value: "bookings.group.booking-payment-return",
      },
      {
        title: "[Bookings] Booking Hotel Failure Confirmation",
        value: "bookings.group.booking-hotel-failure",
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
      {
        title: "[Bookings] selectable Buttons",
        value: "bookings.tabs.selectable-buttons",
      }
    ],
    dialog: [
      {
        title: "[Bookings] Booking Mask",
        value: "bookings.dialog.booking-mask",
      }
    ]
  },
};
