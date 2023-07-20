import { FeatureSchemaDefinition } from "schemas/types";

export const events: FeatureSchemaDefinition = {
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
