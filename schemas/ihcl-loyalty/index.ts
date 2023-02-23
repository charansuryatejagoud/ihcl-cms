import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";

export const loyalty: FeatureSchemaDefinition = {
  variants: {
    group: [
      { title: "[loyalty] Group With tiers", value: "loyalty.group-with-tiers" },
      {
        title: "[loyalty] Group Preview Carousel",
        value: "loyalty.group-preview-carousel",
      },
      {
        title: "[loyalty] Tier Card with Right Aligned Content",
        value: ".loyalty.tier-card-with-right-aligned-content",
      },
      {
        title: "[loyalty] [rectangle] 4 Card Carousel",
        value: "loyalty.4-card-carousel",
      },
      { title: "[loyalty] 3 Row Grid", value: "loyalty.3-row-grid" },
      { title: "[loyalty] 2 Card Carousel", value: "loyalty.2-card-carousel" },
    ],
    card: [
      { title: "[loyalty] Image On Text", value: "loyalty.image-on-text" },
      { title: "[loyalty] Card with Image Title", value: "loyalty.card.card-with-image-title" },
      {
        title: "[loyalty] Card With Combined Image Button",
        value: "loyalty.image-aligned-button",
      },
      { title: "[loyalty] Image On Text", value: "loyalty.image-on-text" },
      {
        title: "[loyalty] Card With Right Aligned Carousel",
        value: "loyalty.card-with-right-aligned-carousel",
      },
    ],
    nudge: [
      { title: "[loyalty] Nudge With Key Value", value: "loyalty.nudge-with-key-value" },
      { title: "[loyalty] Image Preview Nudge", value: "loyalty.imagePreviewNudge" },
      { title: "[loyalty] Nudge With Action", value: "loyalty.nudge-with-action" },
      { title: "[loyalty] Nudge Dual Action", value: "loyalty.nudge.dual-action" },
      {
        title: "[loyalty] Nudge With Mail Action",
        value: "loyalty.nudge.rounded.mail-action",
      },
      { title: "[loyalty] Nudge With Mail Action", value: "loyalty.rounded.mail-action" },
    ],
    dialog: [{ title: "[loyalty] Manage Card", value: "manage-card" }],
  },
};
