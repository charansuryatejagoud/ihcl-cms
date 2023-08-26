import { FeatureSchemaDefinition } from "schemas/types";
import banner from "./banner";
import comparative from "./comparative";
import comparator from "./comparator";
import footer from "./footer";
import header from "./header";
import { imageAsset } from "./imageAsset";
import richText from "./richText";
import specification from "./specification";
import { videoAsset } from "./videoAsset";
import cfReference from "./cfReference";
import uiConfiguration from "./uiConfiguration";
import divider from "./divider";
import linkOnHover from "./linkOnHover";
import inputField from "./inputField";
import items from "./items";
import { images } from "./images";
import membership from "./membership";
import title from "./title";

export const ihclcore: FeatureSchemaDefinition = {
  schemas: [
    videoAsset,
    imageAsset,
    richText,
    header,
    footer,
    banner,
    comparator,
    specification,
    comparative,
    cfReference,
    uiConfiguration,
    divider,
    linkOnHover,
    inputField,
    items,
    images,
    membership,
    title,
  ],
  pageItems: [
    { type: "banner" },
    {
      type: "richText",
    },
    { type: "comparator" },
    { type: "tabsComponent" },
    {
      type: "stepper",
    },
    {
      type: "divider",
    },
    {
      type: "formComponent",
    },
    {
      type: "authentication"
    },
    {
      type: "custom"
    }
  ],
  groupItems: [
    { type: "richText" },
    {
      type: "stepper",
    },
    { type: "comparator" },
    {
      type: "cfReference",
    },
    { type: "tabsComponent" },
    { type: "divider" },
    {
      type: "formComponent",
    },
    {
      type: "categoryHighlights",
    },
    {
      type: "custom"
    }
  ],
  connectedStores: [
    {
      title: "Search Results",
      value: "ihcl.core.connectedStores.search-results",
    },
  ],
  variants: {
    group: [
      {
        title: "Default",
        value: "ihcl.core.group.default",
      },
      {
        title: "Group With Split Cards",
        value: "ihcl.core.group.group-with-split-cards",
      },
      {
        title: "Carousel With Back Ground Image",
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
        title: "Images With Single Column Grid",
        value: "ihcl.core.group.images-with-single-column-grid",
      },
      {
        title: "Group With Carousel",
        value: "ihcl.core.group.group-with-carousel",
      },
      {
        title: "Location Manifest",
        value: "ihcl.core.group.group-location-manifest",
      },
      {
        title: "Location Manifest Item",
        value: "ihcl.core.group.group-location-manifest-item",
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
      {
        title: "Carousel With Tabs",
        value: "ihcl.core.group.carousel-with-tabs",
      },
      {
        title: "Multi Static With Tabs",
        value: "ihcl.core.group.multi-static-with-tabs",
      },
      {
        title: "8:4 Ratio Grid With only two items",
        value: "ihcl.core.group.8-4-ratio-grid-with-only-two-items",
      },
      {
        title: "Carousel Transparent 3 cards",
        value: "ihcl.core.group.carousel-transparent-3-cards",
      },
      {
        title: "Multiple Square Card Carousel",
        value: "ihcl.core.group.multiple-square-card-carousel",
      },
      {
        title: "3 Column Grid With Border ",
        value: "ihcl.core.group.3-column-grid-with-border",
      },
      {
        title: "Option Selector PopUp Modal",
        value: "ihcl.core.group.option-selector-popup-modal",
      },
      {
        title: "Group With Vertical Components",
        value: "ihcl.core.group.group-with-vertical-components",
      },
      {
        title: "Hexagonal Content",
        value: "ihcl.core.group.hexagonal-content",
      },
      {
        title: "Group With SignUp Form",
        value: "ihcl.core.group.signup-form",
      },
      {
        title: "Cookies Management System Modal",
        value: "common-utils.group.cookies-management-system-modal",
      },
      {
        title: "Group With 3 Column Cards Grid (Placeholder)",
        value: "ihcl.core.group.group-with-3-column-cards-grid-placeholder",
      },
    ],
    card: [
      {
        title: "Card With Focused Title",
        value: "ihcl.core.card.card-with-focused-title",
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
        title: "[Split Cards] Card With Aspect Ratio (1:2)",
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
        value:
          "ihcl.core.card.rectangle-card-with-right-aligned-title-aspect-ratio-2:4",
      },
      {
        title: "Image Or Video With Full Width",
        value: "ihcl.core.card.image-or-video-with-full-width",
      },
      {
        title: "Social Media Square Card",
        value: "ihcl.core.card.social-media-square-card",
      },
      {
        title: "Center Aligned Title Tabs",
        value: "ihcl.core.card-center-aligned-title-tabs",
      },
      {
        title: "Social Media Card Image",
        value: "ihcl.core.card.social-media-card-image",
      },
      {
        title: "Card With Center Aligned Content",
        value: "ihcl.core.card.card-with-center-aligned-content",
      },
      {
        title: "Image and Content With Aspect Ratio 1:1",
        value: "ihcl.core.card.image-and-content-with-aspect-ratio-1:1",
      },
      {
        title: "Default Bottom Navigation",
        value: "ihcl.core.card.default-bottom-navigation",
      },
      {
        title: "Custom Bottom Navigation",
        value: "ihcl.core.card.custom-bottom-navigation",
      },
      {
        title: "Media With Bottom And Top Content",
        value: "ihcl.core.card.media-with-bottom-and-top-content",
      },
      {
        title: "Triangle Shape Image On Content",
        value: "ihcl.core.card.triangle-shape-image-on-content",
      },
      {
        title: "City Card",
        value: "ihcl.core.card.city-card",
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
      {
        title: "Search-Result-Component",
        value: "ihcl.core.search-result-component",
      },
      {
        title: "Social Feed",
        value: "common-utils.placeholders.social-feed"
      }
    ],
    nudge: [
      { title: "Default Nudge", value: "ihcl.core.nudge.default" },

      { title: "Banner Nudge", value: "ihcl.core.nudge.banner" },
      { title: "Open Url Nudge", value: "ihcl.core.nudge.open-url" },
      { title: "Pincode Nudge", value: "ihcl.core.nudge.pincode" },
      { title: "Navigation", value: "ihcl.core.nudge.navigation" },
      {
        title: "Alert Message Status",
        value: "ihcl.core.nudge.alert-message-status",
      },
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
    tabs: [
      {
        title: "Multiple Tabs with Border",
        value: "ihcl.core.tabs.multiple-tabs-with-border",
      },
    ],
    switchCaseBlock: [
      {
        title: "Default Switch Case",
        value: "ihcl.core.default-switch-case",
      },
      {
        title: "Payments Switch Case",
        value: "ihcl.core.switchCaseBlock.payments",
      },
    ],
    categoryHighlights: [
      {
        title: "category with logo and text",
        value: "common-utils.categoryHighlights.category-with-logo-and-text",
      },
    ],
    forms:[
      {
        title:"Subscription",
        value:"common-utils.forms.subscription"
      }
    ]
  },
};
