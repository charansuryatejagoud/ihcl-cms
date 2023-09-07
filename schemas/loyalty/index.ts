import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";
import cugOffers from "./cug-offers";

export const loyalty: FeatureSchemaDefinition = {
  schemas: [
    cugOffers
  ],
  connectedStores: [
    {
      title: "[Loyalty] Epicure Cards Store",
      value: "loyalty.stores.loyalty-epicure-cards-store",
    },
    {
      title:"[Loyalty] Member Confirm Details",
      value:"loyalty.stores.member-confirm-details"
    }
  ],
  variants: {
    group: [
      {
        title: "[Loyalty] Group With tiers",
        value: "loyalty.group-with-tiers",
      },
      {
        title: "[Loyalty] Group Preview Carousel",
        value: "loyalty.group-preview-carousel",
      },
      {
        title: "[Loyalty] Tier Card with Right Aligned Content",
        value: "loyalty.tier-card-with-right-aligned-content",
      },
      {
        title: "[Loyalty] [rectangle] 4 Card Carousel",
        value: "loyalty.4-card-carousel",
      },
      { title: "[Loyalty] 3 Row Grid", value: "loyalty.3-row-grid" },
      { title: "[loyalty] 2 Card Carousel", value: "loyalty.2-card-carousel" },
      {
        title: "[Loyalty] Comperative Specifications",
        value: "loyalty.group-with-comperative-specifications",
      },
      {
        title: "[Loyalty] 4 Cards With Comperative Specifications",
        value: "loyalty.group-4-cards-with-comperative-specifications",
      },
      {
        title: "[Loyalty] Group with Card Media Content Positions",
        value: "loyalty.group.card-media-content-positions",
      },
      {
        title:"[Loyalty] Membership Purchase Details",
        value:"loyalty.group.membership-purchase-details"
      },
      {
        title: "[Loyalty] Loyalty Product Payment and Information",
        value: "loyalty.group.loyalty-product-payment-and-information",
      },
      {
        title: "[Loyalty] Carousel with Membership Tabs",
        value: "loyalty.group.carousel-with-membership-tabs",
      },
      {
        title: "[Loyalty] Carousel with selected Tabs",
        value: "loyalty.group.carousel-with-selected-image-tabs",
      }
    ],
    card: [
      { title: "[Loyalty] Text on Image", value: "loyalty.text-on-image" },
      {
        title: "[Loyalty] Card with Image Title",
        value: "loyalty.card.card-with-image-title",
      },
      {
        title: "[Loyalty] Card With Combined Image Button",
        value: "loyalty.image-aligned-button",
      },
      {
        title: "[Loyalty] Text on Card with Cta",
        value: "loyalty.text-on-card-with-cta",
      },
      {
        title: "[Loyalty] Card With Right Aligned Carousel",
        value: "loyalty.card-with-right-aligned-carousel",
      },
      {
        title: "[Loyalty] Card With Group Of Gift Items Right Content",
        value: "loyalty.card.card-with-group-of-gift-items-right-content",
      },
      {
        title: "[Loyalty] Card With Hotel Details",
        value: "loyalty.card.card-with-hotel-details",
      },
      {
        title: "[Loyalty] Card With background Image and Column aligned dual actions",
        value: "loyalty.card.card-with-background-image.horizontal-dual-actions",
      },
      {
        title: "[Loyalty] Left Media with Group Of Gift Items Right Content",
        value: "loyalty.card.left-media-with-group-of-gift-items-right-content",
      },
      {
        title: "[Loyalty] Chambers Details",
        value: "loyalty.card.chambers-details",
      },
      {
        title: "[Loyalty] Reverse Chambers Details",
        value: "loyalty.card.reverse-chambers-details",
      },
      {
        title: "[Loyalty] Epicure Membership Login",
        value: "loyalty.card.epicure-membership-login",
      }
    ],
    nudge: [
      {
        title: "[Loyalty] Nudge With Key Value",
        value: "loyalty.nudge-with-key-value",
      },
      {
        title: "[Loyalty] Image Preview Nudge",
        value: "loyalty.imagePreviewNudge",
      },
      {
        title: "[Loyalty] Nudge With Action",
        value: "loyalty.nudge-with-action",
      },
      {
        title: "[Loyalty] Nudge Dual Action",
        value: "loyalty.nudge.dual-action",
      },
      {
        title: "[Loyalty] Nudge With Mail Action",
        value: "loyalty.nudge.rounded.mail-action",
      },
    ],
    dialog: [
      { title: "[Loyalty] Manage Card", value: "manage-card" },
    ],
    stepper: [
      {
        title: "[Loyalty] E-Gift Card Flow",
        value: "loyalty.stepper.e-gift-card-flow",
      },
    ],
    placeholder: [
      {
        title: "[Loyalty] Customer Information Form",
        value: "loyalty.placeholders.customer-information-form",
      },
      {
        title: "[Loyalty] Membership Holder Details",
        value: "loyalty.placeholders.membership-holder-details",
      },
      {
        title: "[Loyalty] Price Breakup Details",
        value: "loyalty.placeholders.price-breakup-details",
      },
    ],
    switchCaseBlock: [
      {
        title: "[Loyalty] Epicure User Login",
        value: "loyalty.switchCaseBlock.loyalty-user-login",
      }
    ]
  },
};
