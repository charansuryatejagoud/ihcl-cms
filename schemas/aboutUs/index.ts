import { TreeItem } from "@sanity/ui";
import { FeatureSchemaDefinition } from "schemas/types";

export const aboutUs: FeatureSchemaDefinition = {
  variants: {
    card: [
      {
        title: "[About Us] Hotel Data with Address",
        value: "aboutUs.card.hotel-data-with-address",
      },
    ],
    group: [
      {
        title: "[About Us] Split Cards",
        value: "aboutUs.group.split-cards",
      },
    ],
  },
};
