import { FeatureSchemaDefinition } from "schemas/types";

export const holidays: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title:
          "[Holiday Details] Group With 3 Column Cards Grid(Layout Placeholder)",
        value:
          "ihcl.core.group.group-with-3-column-cards-grid-holiday-layout-placeholder",
      },
      {
        title:
          "[Holiday Details] Highlighted 2 Card Carousel(Layout Placeholder)",
        value: "ihcl.core.group.highlighted-2-card-carousel-layout-placeholder",
      },
      {
        title:
          "[Holiday Details] Group With Card Left Media Right Content(Layout Placeholder)",
        value:
          "details.group.group-with-card-left-media-right-content-aspect-ratio-2:4-layout-placeholder",
      },
      {
        title: "[Holidays] 3 Column Grid With Participating Hotels",
        value: "holidays.group.3-column-grid-with-participating-hotels",
      },
    ],
    banner: [],
    dialog: [
      { title: "[Details] Image Gallery", value: "details.image-gallery" },
      { title: "[Details] Venue Enquiry", value: "details.venue-enquiry" },
      { title: "[Details] Event Enquiry", value: "details.event-enquiry" },
      { title: "[Details] Venue Details", value: "details.venue-details" },
      { title: "[Details] Video Pop Up", value: "details.video-pop-up" },
      { title: "[Details] Share Pop Up", value: "details.share-pop-up" },
      {
        title: "[Details] Gallery With Carousel",
        value: "details.dialog.gallery-with-carousel",
      },

      {
        title: "[Details] Enquiry Form Models",
        value: "details.dialog.enquiries-form-models",
      },
      {
        title: "[Details] Image Carousal Model",
        value: "details.dialog.image-carousel-model",
      },
      {
        title: "[Details] Hotel Room Types",
        value: "details.dialog.hotel-room-types",
      },
    ],
    placeholder: [
      {
        title: "[Details] Hotels Locations on Map",
        value: "details.placeholders.hotels-locations-on-map",
      },
    ],
    nudge: [
      {
        title: "[Details] Right Aligned Actions",
        value: "details.nudge.right-aligned-actions",
      },
    ],
  },
};
