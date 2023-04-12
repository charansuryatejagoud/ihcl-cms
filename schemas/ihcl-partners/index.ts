import { FeatureSchemaDefinition } from "schemas/types";

export const partners: FeatureSchemaDefinition = {
  variants: {
    group: [],
    card: [
      {
        title: "[Partners] Right Media Image Carousel with Left Content",
        value: "partners.card.right-media-image-carousel-with-left-content",
      },
    ],
    nudge: [
      {
        title: "[Partners] Left Image Right Content With Border",
        value: "partners.nudge.left-image-right-content-with-border",
      },
    {
        title:"[Partners] Nudge With Two Links",
        value:"partners.nudge.nudge-with-two-links"
    }
    ],
  },
};
