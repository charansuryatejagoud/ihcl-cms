import { FeatureSchemaDefinition } from "schemas/types";

export const chambers: FeatureSchemaDefinition = {
  variants: {
    card: [
      {
        title: "[Chambers] Details",
        value: "chambers.card.details",
      },
      {
        title: "[Chambers] Reverse Details",
        value: "chambers.card.reverse-details",
      },
    ],
  },
};
