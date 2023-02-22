import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";

export const loyalty: FeatureSchemaDefinition = {
  variants: {
    group: [
      { title: "Group With tiers", value: "loyalty.group-with-tiers" },
      {
        title: "Group Preview Carousel",
        value: "loyalty.group-preview-carousel",
      },
      {
        title: "Tier Card with Right Aligned Content",
        value: ".loyalty.tier-card-with-right-aligned-content",
      },
      {
        title: "[rectangle] 4 Card Carousel",
        value: "loyalty.4-card-carousel",
      },
      { title: "3 Row Grid", value: "loyalty.3-row-grid" },
      { title: "2 Card Carousel", value: "loyalty.2-card-carousel" },
    ],
    card: [
      { title: "Image On Text", value: "loyalty.image-on-text" },
      { title: "Card with Image Title", value: "loyalty.card.card-with-image-title" },
      {
        title: "Card With Combined Image Button",
        value: "loyalty.image-aligned-button",
      },
      { title: "Image On Text", value: "loyalty.image-on-text" },
      {
        title: "Card With Right Aligned Carousel",
        value: "loyalty.card-with-right-aligned-carousel",
      },
    ],
    nudge: [
      { title: "Nudge With Key Value", value: "loyalty.nudge-with-key-value" },
      { title: "Image Preview Nudge", value: "loyalty.imagePreviewNudge" },
      { title: "Nudge With Action", value: "loyalty.nudge-with-action" },
      { title: "Nudge Dual Action", value: "loyalty.nudge.dual-action" },
      {
        title: "Nudge With Mail Action",
        value: "loyalty.nudge.rounded.mail-action",
      },
      { title: "Nudge With Mail Action", value: "loyalty.rounded.mail-action" },
    ],
    dialog: [{ title: "Manage Card", value: "manage-card" }],
  },
};
