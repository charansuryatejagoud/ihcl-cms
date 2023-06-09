import { TreeItem } from "@sanity/ui";
import { FeatureSchemaDefinition } from "schemas/types";

export const aboutUs: FeatureSchemaDefinition = {
  variants: {
    card: [],
    group: [
      {
        title: "[About Us] Split Cards",
        value: "aboutUs.group.split-cards",
      },
    ],
  },
};
