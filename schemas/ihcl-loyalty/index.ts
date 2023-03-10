import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";

export const loyalty: FeatureSchemaDefinition = {
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
        title: "[Loyalty] Group With Group Of Gift Items Right Content",
        value: "loyalty.group.group-of-gift-items-right-content",
      },
      {
        title: "[Loyalty] Group with Card Media Content Positions",
        value: "loyalty.group.card-media-content-positions",
      },
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
      {
        title: "[Loyalty] Enquire Bulk Gift Card",
        value: "enquire-bulk-gift-card",
      },
    ],
    stepper: [
      {
        title: "[Loyalty] E-Gift Card Flow",
        value: "loyalty.stepper.e-gift-card-flow",
      },
    ],
  },
};
