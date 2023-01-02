import { FeatureSchemaDefinition } from "../types";
import imageSet from "./objects/imageSet";
import link from "./objects/link";
import navigationItem from "./objects/navigationItem";
import blockImage from "./objects/blockImage";
import seo from "./objects/seo";
import blockContent from "./objects/blockContent";
import blockSection from "./objects/blockSection";
import unknown from "./objects/unknown";
import toggle from "./objects/toggle";
import typography from "./objects/typography";
import avatar from "./objects/avatar";
import category from "./documents/category";
import settings from "./documents/settings";
import experiment from "./documents/experiment";
import brand from "./documents/brand";
import offer from "./documents/offer";
import metadata from "./objects/metadata";
import empty from "./objects/empty";
import video from "./objects/video";
import faqs from "./objects/faqs";
import appConfig from "./documents/appConfig";
import { featureFlagVariant } from "./objects/switchCaseBlock";
import { featureFlag } from "./objects/ifElseBlock";
import fileDocument from "./objects/fileDocument";
import reorderTransformer from "./transformers/reorder.transformer";
import { cellSchema, rowSchema } from "./objects/dataGrid";
import marketingAssets from "./documents/marketingAssets";
import hamburgerProfile from "./hamburgerProfileHeader";
import accelerator from "./documents/accelerator";
import faqCategory from "./documents/faqCategory";
import faqQuestion from "./documents/faqQuestion";
import {acceleratorCardVariant} from "./objects/card";

export const core: FeatureSchemaDefinition = {
  schemas: [
    offer,
    experiment,
    category,
    settings,
    imageSet,
    link,
    navigationItem,
    blockImage,
    seo,
    blockContent,
    blockSection,
    unknown,
    typography,
    avatar,
    brand,
    faqs,
    metadata,
    empty,
    video,
    appConfig,
    toggle,
    fileDocument,
    cellSchema,
    rowSchema,
    marketingAssets,
    hamburgerProfile,
    accelerator,
    faqCategory,
    faqQuestion,
   
  ],
  transformers: [reorderTransformer],
  headers: [
    {
      type: "core.hamburger.profile.header",
    },
  ],
  footers: [
    {
      type: "blockSection",
    },
  ],
  pageItems: [
    { type: "group" },
    { type: "section" },
    {
      type: "nudge",
    },
    { type: "card" },
    {
      type: "link",
    },
    {
      type: "blockSection",
    },
    {
      type: "blockImage",
    },
    {
      type: "typography",
    },
    {
      type: "placeholder",
    },
    { type: "lockableItem" },
    {
      type: "unknown",
    },
    {
      type: "ifElseBlock",
    },
    {
      type: "faqs",
    },
    {
      type: "switchCaseBlock",
    },
    {
      type: "reference",
      title: "Attached Content",
      weak: true,
      to: [
        {
          type: "attachedContent",
        },
      ],
    },
    {
      type: "empty",
    },
    { type: "video" },
    { type: "table" },
    { type: "toggle" },
    { type: "dataGrid" },
  ],
  groupItems: [
    {
      type: "card",
    },
    {
      type: "nudge",
    },
    {
      type: "link",
    },
    {
      type: "avatar",
    },
    { type: "group" },
    {
      type: "blockSection",
    },
    {
      type: "faqs",
    },
    {
      type: "blockImage",
    },
    {
      type: "typography",
    },
    {
      type: "placeholder",
    },
    { type: "lockableItem" },
    { type: "ifElseBlock" },
    { type: "switchCaseBlock" },
    { type: "video" },
    { type: "table" },
    { type: "toggle" },
    { type: "dataGrid" },
  ],
  variants: {
    group: [
      { title: "Carousel", value: "carousel" },
      { title: "Large Carousel", value: "carousel-large" },
      { title: "Horizontal List", value: "list" },
      { title: "Vertical List", value: "list.vertical" },
      {
        title: "Vertical List Zero Padding",
        value: "list.vertical.zero-padding",
      },
      {
        title: "Vertical List Zero Padding (Item Padding 4)",
        value: "list.vertical.zero-padding.widget-padding-4",
      },
      { title: "Items Only List", value: "list.items-only" },
      { title: "Single Item", value: "list.single-item" },
      { title: "2-Column Grid", value: "grid-cols2" },
      { title: "3-Column Grid", value: "grid-cols3" },
      { title: "6-Column Grid", value: "grid-cols6" },
      { title: "Column Grid with black Background", value: "grid-cols-black" },
      { title: "Auto Carousel", value: "carousel-auto" },
      { title: "Placeholder", value: "placeholder" },
      { title: "3-Column Carousel", value: "carousel-cols3" },
      { title: "4-Column Carousel", value: "carousel-cols4" },
      { title: "6-Column Carousel", value: "carousel-cols6" },
      {
        title: "Auto Carousel With Circular White Dots Indicator",
        value: "carousel-auto-white-circular-indicator",
      },
      {
        title: "Grid 2-Col Aspect Ratio 3:1",
        value: "grid.column-2.aspect-3:1",
      },
      {
        title: "3-Column Smooth Scroll Carousel",
        value: "smooth-scroll-carousel-cols3",
      },
      {
        title: "Expansion View",
        value: "expansion",
      },
      {
        title: "Nav Options",
        value: "list.nav.options",
      },
      {
        title: "Center Aligned",
        value: "center-align",
      },
    ],
    navigation: [
      { title: "Default Navigation", value: "default" },
      { title: "Hidden Navigation", value: "hidden" },
      { title: "Back Button Navigation", value: "back.navigation" },
      { title: "Appbar with chatbot", value: "chatbot.appbar" },
    ],
    card: [
      { title: "Default Card", value: "card-default" },
      { title: "Card With Content", value: "card-content" },
      { title: "Card with Rich Text content", value: "card-rich-text" },
      {
        title: "Landscape, 100% Width (3:1 aspect)",
        value: "card-landscape-w100-aspect-3:1",
      },
      {
        title: "Landscape, 100% Width (4:3 aspect)",
        value: "card-landscape-w100-aspect-4:3",
      },
      {
        title: "Landscape, 100% Width (16:9 aspect)",
        value: "card-landscape-w100-aspect-16:9",
      },
      {
        title: "Landscape, No Padding 100% Width (16:9 aspect)",
        value: "card-landscape-w100-aspect-16:9-no-padding",
      },
      {
        title: "Landscape, No Padding 100% Width (4:3 aspect)",
        value: "card-landscape-w100-aspect-4:3-no-padding",
      },
      {
        title: "Landscape, 100% Width (2:1 aspect)",
        value: "card-landscape-w100-aspect-2:1",
      },
      {
        title: "Landscape, 100% Width (4:1 aspect)",
        value: "card-landscape-w100-aspect-4:1",
      },
      { title: "Portrait Card", value: "card-portrait" },
      { title: "Square Card", value: "card-square" },
      { title: "Circular Card", value: "card-circular" },
      { title: "Placeholder Card", value: "card-placeholder" },
      { title: "Banner Card", value: "card-banner" },
      { title: "Subscription Card", value: "subscription" },
      { title: "Faq Card", value: "card-faq" },
      { title: "Card With Only Image", value: "card.onlyImageWrapper" },
      { title: "Card With Label", value: "card-label" },
      { title: "App Version", value: "card-label.app-version" },
      {
        title: "Card With Image Overlay Text",
        value: "card.ImagewithOverlayText",
      },
      {
        title: "Rounded Small card",
        value: "card-rounded-with-title",
      },
      {
        title: "Rounded Black bottom card Title & Description",
        value: "card-rounded-with-title-desc",
      },
      {
        title: "Rounded white bottom card Title ",
        value: "card-rounded-with-title-bottom-white-bg",
      },
      {
        title: "Rounded white bottom card Title & Description",
        value: "card-rounded-with-title-descri-bottom-white-bg",
      },
      {
        title: "Full Width Card With Logo",
        value: "card.fullWidthLogo",
      },
      acceleratorCardVariant,
    ],
    nudge: [
      { title: "Default Nudge", value: "default" },
      { title: "Nudge With Action", value: "nudge-action" },
      { title: "Nudge Dual Action", value: "nudge.dual-action" },
      { title: "Banner Nudge", value: "nudge.banner" },
      { title: "Open Url Nudge", value: "nudge.open-url" },
      { title: "Pincode Nudge", value: "pincode" },
      {
        title: "Nudge With background Image and Column alligned dual actions",
        value: "nudge.background-image.horizontal-dual-actions",
      },
      { title: "Nudge Banner Gradient", value: "nudge.banner-gradient" },
      { title: "Nudge Info Banner", value: "nudge.info-banner" },
      { title: "Homepage Footer", value: "homepage.footer" },
      { title: "Chat Nudge", value: "nudge.chat" },
      {
        title: "Nudge with Single Action",
        value: "nudge.rounded.small-wrapper",
      },
      { title: "Nudge Rounded Logo", value: "nudge.rounded.logo-wrapper" },
      { title: "Nudge with icons", value: "nudge.card.icons" },
      { title: "[Homepage] Chat Nudge", value: "homepage.nudge.chat" },
    ],
    dialog: [
      { title: "Alert", value: "alert" },
      { title: "Bottom Sheet", value: "bottomSheet" },
      { title: "Nested Bottom Sheet", value: "nestedBottomSheet" },
      { title: "Alert Without Close Cta", value: "alert.without.close.cta" },
    ],
    switchCaseBlock: [
      featureFlagVariant,
      {
        title: "App Version based",
        value: "core.switchCase.appVersion",
      },
    ],
    ifElseBlock: [
      featureFlag,
      {
        title: "Is Desktop View",
        value: "viewport.desktop-only",
      },
    ],
    dataGrid: [
      {
        title: "Default",
        value: "dataGrid.default",
      },
    ],
  },
};
