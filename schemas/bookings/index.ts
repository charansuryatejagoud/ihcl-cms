import { FeatureSchemaDefinition } from "schemas/types";
export const bookings: FeatureSchemaDefinition = {
  connectedStores: [
    {
      title: "[Bookings] Booking Store",
      value: "bookings.store",
    },
    {
      title: "[Bookings] Booking Confirmation Page Store",
      value: "bookings.booking-confirmation-page-store",
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
        title: "[Bookings] Hotels Packages",
        value: "bookings.placeholders.hotels-packages",
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
      },
      {
        title: "[Bookings] Payment Details CC Avenue",
        value: "bookings.placeholders.payment-details-cc-avenue"
      }
    ],
    nudge: [
      {
        title: "[Bookings] Checking Hotel Room Rates",
        value: "bookings.nudge.checking-hotel-room-rates",
      },
      {
        title: "[Bookings] Review Reselect Room",
        value: "bookings.nudge.review-reselect-room",
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
      {
        title: "[Bookings] FAQs",
        value: "bookings.group.faqs",
      }
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
      },
    ],
    dialog: [
      {
        title: "[Bookings] Booking Mask",
        value: "bookings.dialog.booking-mask",
      },
      {
        title: "[Bookings] Booking Cancelation Status",
        value: "bookings.dialog.booking-cancelation-status",
      },
      {
        title: "[Bookings] Reselect Room Modal",
        value: "bookings.dialog.reselect-room-modal",
      },
      {
        title: "[Bookings] Success and Failure Pop-up",
        value: "bookings.dialog.success-and-failure-pop-up",
      }
    ],
  },
};
