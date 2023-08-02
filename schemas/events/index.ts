import { FeatureSchemaDefinition } from "schemas/types";
import { weddingAssets, weddingMedia } from "./weddingAssets";
import { featureDefinition } from "schemas/feature-schemas";

export const events: FeatureSchemaDefinition = {
  schemas: [weddingAssets(), weddingMedia()],
  customItems: [{ type: "weddingAssets" }],
  variants: {
    group: [
      {
        title: "[Events] Wedding - Randomly Arranged Media",
        value: "events.group.wedding-randomly-arranged-media",
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
    ],
  },
};
