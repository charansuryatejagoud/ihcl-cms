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
      {
         title: "[Business Services] Group With 1:2 outer padding",
          value: "businessServices.group.group-with-1:2-outer-padding",
      },
    ],
    card: [
      {
        title:
          "[Business Services] center Aligned Title Description with Actions",
        value: "businessServices.card.center-aligned-title-desc-actions",
      },
      {
        title: "[Business Services] Highlighted Text with Description",
        value: "businessServices.card.highlighted-text-with-description",
      },
      {
        title:"[Business Services] Hotel Booking Steps",
        value:"businessServices.card.hotel-booking-steps"
      },
    ],
    placeholder: [
      {
        title: "[Business Services] Title with Single Action",
        value: "businessServices.placeholders.title-with-single-action",
      },
    ],
  },
};
