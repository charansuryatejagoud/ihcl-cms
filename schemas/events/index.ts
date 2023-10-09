import { FeatureSchemaDefinition } from "schemas/types";
import { weddingAssets, weddingMedia } from "./weddingAssets";

export const events: FeatureSchemaDefinition = {
  schemas: [weddingAssets(), weddingMedia()],
  customItems: [{ type: "weddingAssets" }],
  variants: {
    group: [
      {
        title: "[Events] Wedding - Randomly Arranged Media",
        value: "events.group.wedding-randomly-arranged-media",
      },
      {
        title: "[Events] Filter Tab Media",
        value: "events.group.filter-tab-media",
      },
      {
        title: "[Events] Carousel Tabs",
        value: "events.group.carousel-tabs",
      },
    ],
    card: [
      {
        title: "[Events] Circular Avatar With Bottom Box",
        value: "events.card.circular-avatar-with-bottom-box",
      },
      {
        title: "[Events] Wedding - Title On Image",
        value: "events.card.wedding-title-on-image",
      },
      {
        title: "[Events] She Remains The Taj Modal",
        value: "events.card.she-remains-the-taj-modal",
      }
    ],
  },
};
