import { FeatureSchemaDefinition } from "schemas/types";

export const businessServices: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title:
          "[Business Services] FactSheet Download Action with Background Image",
        value: "businessServices.group.factSheet-download-action-with-bg-img",
      },
      {
        title: "[Business Services] Terms with Bullet Points",
        value: "businessServices.group.terms-with-bullet-points",
      },
    ],
    card: [
      {
        title:
          "[Business Services] center Aligned Title Description with Actions",
        value: "businessServices.card.center-aligned-title-desc-actions",
      },
    ],
  },
};
