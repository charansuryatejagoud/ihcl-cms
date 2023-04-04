import { FeatureSchemaDefinition } from "schemas/types";

export const partners: FeatureSchemaDefinition = {
  variants: {
    group: [],
    card: [
      {
        title: "[partners] Right Media Image Carousel with Left Content",
        value: "partners.card.right-media-image-carousel-with-left-content",
      },
    ],
    nudge: [
      {
        title: "[partners] Left Image Right Content With Border",
        value: "partners.nudge.left-image-right-content-with-border",
      },
    ],
  },
};
