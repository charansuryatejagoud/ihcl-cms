import customText from "@components/custom-text";
import { FeatureSchemaDefinition } from "schemas/types";
import banner from "./banner";
import footer from "./footer";
import header from "./header";
import { imageAsset } from "./imageAsset";
import richText from "./richText";
import stepperComponent from "./stepperComponent";
import textContainer from "./textContainer";
import { videoAsset } from "./videoAsset";
export const ihclcore: FeatureSchemaDefinition = {
  schemas: [
    videoAsset,
    imageAsset,
    richText,
    stepperComponent,
    header,
    footer,
    banner,
    textContainer,
  ],
  pageItems: [
    { type: "banner" },
    {
      type: "richText",
    },
    { type: "motor.insurance.customText" },
  ],
  groupItems: [
    { type: "richText" },
    {
      type: "stepper",
    },
  ],

  variants: {
    group: [
      {
        title: " Group With Split Cards ",
        value: "ihcl.core.group.group-with-split-cards",
      },
      {
        title: " Carousel With Back Ground Image",
        value: "ihcl.core.group.carousel-with-back-ground-image",
      },
      {
        title: "4 Row Grid",
        value: "ihcl.core.group.4-row-grid",
      },
      {
        title: "Group With 3 Column Cards Grid",
        value: "ihcl.core.group.group-with-3-column-cards-grid",
      },
      {
        title: "Highlighted 2 Card Carousel",
        value: "ihcl.core.group.highlighted-2-card-carousel",
      },

      {
        title: "Group With VideoPlayer",
        value: "ihcl.core.group.group-with-videoPlayer",
      },
      {
        title: "Hotel Address Data",
        value: "ihcl.core.group.hotel-address-data",
      },
      { title: "Multiple Data", value: "ihcl.core.group.multiple-data" },
      {
        title: "Group With Filter Buttons",
        value: "ihcl.core.group.group-with-filter-buttons",
      },
      {
        title: "Images WithS Single Column Grid",
        value: "ihcl.core.group.images-with-single-column-grid",
      },
      {
        title: "Media With Single Image",
        value: "ihcl.core.group.media-with-single-image",
      },
      {
        title: "Carousal With Single Media",
        value: "ihcl.core.group.carousal-with-single-media",
      },
      {
        title: "Group With Carousel",
        value: "ihcl.core.group.group-with-carousel",
      },
      {
        title: "Location Manifest",
        value: "ihcl.core.group.group.location-manifest",
      },
      {
        title: "Location Manifest Item",
        value: "ihcl.core.group.group.location-manifest-item",
      },
      {
        title: "Group With Sectional Tabs",
        value: "ihcl.core.group.group-with-sectional-tabs",
      },
      {
        title: "Group With Stepper And Tabs",
        value: "ihcl.core.group.group-with-stepper-and-tabs",
      },
      { title: "Stepper Items", value: "ihcl.core.group.stepper-items" },
      {
        title: "Carousal With Single Card Media",
        value: "ihcl.core.group.carousal-with-single-card-media",
      },

      { title: "Toll Free No", value: "ihcl.core.group.toll-free-no" },
      {
        title: "Group With Filter Buttons",
        value: "ihcl.core.group.group-with-filter-buttons",
      },
      {
        title: "Group With Multiple Buttons",
        value: "ihcl.core.group.group-with-multiple-buttons",
      },
      {
        title: "Group With Side Aligned Content Link",
        value: "ihcl.core.group.group-with-side-aligned-content-link",
      },
      {
        title: "Center Aligned Content",
        value: "ihcl.core.group.center-aligned-content",
      },
      {
        title: "Carousel With 3 Column Grid",
        value: "ihcl.core.group.carousel-with-three-column-grid",
      },

      {
        title: "4 Column Rectangle Grid",
        value: "ihcl.core.group.four-column-rectangle-grid",
      },
      {
        title: "Multiple Row 4 Column Grid",
        value: "ihcl.core.group.multiple-row-four-column-grid",
      },
    ],
    card: [
      {
        title: "Single Item",
        value: "ihcl.core.card.single-item",
      },
      {
        title: "Card With Focused Title",
        value: "ihcl.core.card.card-with-focused-title",
      },
      {
        title: "3 Actions With Right Aligned Content Card",
        value: "ihcl.core.card.3-actions-with-right-aligned-content-card",
      },
      {
        title: "Card Ends Aligned Content",
        value: "ihcl.core.card.card-ends-aligned-content",
      },
      { title: "Vertical Card", value: "ihcl.core.card.vertical-card" },
      { title: "Image Title Tabs", value: "ihcl.core.card.image-title-tabs" },

      {
        title: "Card With Description Actions",
        value: "ihcl.core.card.card-with-description-actions",
      },
      {
        title: "Card With Combined Image Button",
        value: "ihcl.core.card.image-aligned-button",
      },
      {
        title: "Card With Aspect Ratio (1:2) ",
        value: "ihcl.core.card.card-with-aspect-ratio-of-1:2",
      },
      {
        title: "Carousel Card With Aspect Ratio (4:3)",
        value: "ihcl.core.card.carousel-card-with-aspect-ratio-4:3",
      },
      {
        title: "Card With Right Aligned Title And Link",
        value: "ihcl.core.card.card-with-right-aligned-title-and-link",
      },

      {
        title: "Rectangle Card With Aspect Ratio (2:4)",
        value: "ihcl.core.card.rectangle-card-with-right-aligned-title-aspect-ratio-2:4",
      },
      {
        title: "Image Or Video With Full Width",
        value: "ihcl.core.card.image-or-video-with-full-width",
      },
      {
        title: "Social Media Square Card",
        value: "ihcl.core.card.social-media-square-card",
      },
    ],
    banner: [
      {
        title: "Hero Banner",
        value: "ihcl.core.banner.hero-banner",
      },
      {
        title: "Short Hero Banner",
        value: "ihcl.core.banner.short-hero-banner",
      },
    ],
    placeholder: [
      { title: "Toll-Free-Numbers", value: "ihcl.core.toll-free-numbers" },
    ],
    dialog: [
      { title: "Alert", value: "ihcl.core.alert" },
      { title: "Bottom Sheet", value: "ihcl.core.bottom-Sheet" },
      { title: "Nested Bottom Sheet", value: "ihcl.core.nested-bottom-sheet" },
      {
        title: "Alert Without Close Cta",
        value: "ihcl.core.alert-without-close-cta",
      },
    ],
  },
};
