import { FeatureSchemaDefinition } from "../types";
// import imageSet from "./objects/imageSet";
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
// import { acceleratorCardVariant } from "./objects/card";
import banner, { bannerComponents } from "./objects/banner";
import footer from "./documents/footer";
import header from "./documents/header";
import { imageAsset } from "./objects/imageAsset";
import { videoAsset } from "./objects/videoAsset";
import richText from "./objects/richText";
export const core: FeatureSchemaDefinition = {
  schemas: [
    offer,
    experiment,
    category,
    settings,
    richText,
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
    banner,
    header,
    footer,
    imageAsset,
    videoAsset,
    
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
    }
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
    { type: "banner" },
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
      type:"richText"
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
    {type:"richText"}
  ],
  variants: {
    group: [
      { title: '4-row-grid', value: '4-row-grid' },
      { title: 'multi-cards-carousel', value: 'multi-cards-carousel' },
      { title: 'single-card-carousel-with-bg-image', value: 'single-card-carousel-with-bg-image' },
      { title: 'carousel-with-award-cards', value: 'carousel-with-award-cards' },
      { title: 'multi-cards-carousel-with-bg-image', value: 'multi-cards-carousel-with-bg-image' },
      { title: 'media-card', value: 'media-card' },
      { title: 'carousel-with-focused-title', value: 'carousel-with-focused-title' },
       {title:"Group-With-Rich-Text-columns",value:"group-with-rich-text-columns"},
      { title: 'group-with-links', value: 'group-with-links' },
      { title: 'group-with-maps', value: 'group-with-maps' },
      { title: 'card-with-focused-title', value: 'card-with-focused-title' },
      { title: 'highlighted-2-cards-carousel', value: 'highlighted-2-cards-carousel' },
      { title: 'carousel-with-tabs', value: 'carousel-with-tabs' },
      { title: 'carousel-with-3-column-grid', value: 'carousel-with-3-column-grid' },
      { title: 'transparent-4-cards', value: 'transparent-4-cards' },
      { title: 'group-with-simple-media', value: 'group-with-simple-media' },
      { title: '4-column-rectangle-grid', value: '4-column-rectangle-grid' },
      { title: '2-row-grid', value: '2-row-grid' },
      { title: 'group-with-2-column-cards-grid', value: 'group-with-2-column-cards-grid' },
      { title: 'group-with-3-column-cards-grid', value: 'group-with-3-column-cards-grid' },
      { title: '3-cards-carousel', value: '3-cards-carousel' },
      { title: 'highlighted-1-cards-carousel', value: 'highlighted-1-cards-carousel' },
      { title: 'group-with-media', value: 'group-with-media' },
      { title: 'group-with-videoPlayer', value: 'group-with-videoPlayer' },
      { title: 'hotel-address-data', value: 'hotel-address-data' },
      { title: 'multiple-data', value: 'multiple-data' },
      { title: 'carousel-with-side-text-card', value: 'carousel-with-side-text-card' },
      { title: 'navigation-tabs', value: 'navigation-tabs' },
      { title: 'group-with-description', value: 'group-with-description' },
      { title: "group-with-side-aligned-content-link",value:"group-with-side-aligned-content-link"},
      { title: "Center-aligned-content",value:"center-aligned-content" },
      { title: "Feedback-Form",value:"feedback-form" },
      { title: "group-with-filter-buttons", value: "group-with-filter-buttons" },
      { title: "group-with-multiple-buttons", value:"group-with-multiple-buttons" },
      {title:"Transparent-3-Cards",value:"transparent-3-cards"},
      {title:"Toll-Free-No",value:"toll-free-no"},
      {title: "multi-cards-carousel-with-image", value: "multi-cards-carousel-with-image"},
      {title: "images-with-single-column-grid", value: "images-with-single-column-grid"},
      {title: "media-with-single-image",value: "media-with-single-image"},
      {title: "carousal-with-single-media", value: "carousal-with-single-media"}
    ],
    navigation: [
      { title: "Default Navigation", value: "default" },
      { title: "Hidden Navigation", value: "hidden" },
      { title: "Back Button Navigation", value: "back.navigation" },
      { title: "Appbar with chatbot", value: "chatbot.appbar" },
    ],
    card: [
      { title: "Simple Media", value: "simple-media" },
      { title: "card-with-carousel", value: "card-with-carousel" },
      { title: "award-card", value: "award-card" },
      { title: "carousel-with-bg-image", value: "carousel-with-bg-image" },
      { title: "card-with-focused-title", value: "card-with-focused-title" },
      { title: "3-actions-with-right-aligned-content-card", value: "3-actions-with-right-aligned-content-card" },
      { title: "card-with-tabs", value: "card-with-tabs" },
      { title: "single-item", value: "single-item" },
      { title: "card-with-information", value: "card-with-information" },
      { title: "card-with-links", value: "card-with-links" },
      { title: "card-with-location", value: "card-with-location" },
      { title: "title-with-hoverable-card", value: "title-with-hoverable-card" },
      { title: "card-with-simple-media", value: "card-with-simple-media" },
      { title: "rectangle-card", value: "rectangle-card" },
      { title: "card-with-right-aligned-title-link", value: "card-with-right-aligned-title-link" },
      { title: "3-column-grid", value: "3-column-grid" },
      { title: "card-with-title-and-sub-titles", value: "card-with-title-and-sub-titles" },
      { title: "card-with-2-buttons-and-link", value: "card-with-2-buttons-and-link" },
      { title: 'card-with-right-aligned-content', value: 'card-with-right-aligned-content' },
      { title: 'card-with-right-aligned-content-with-link', value: 'card-with-right-aligned-content-with-link' },
      { title: 'card-with-side-text', value: 'card-with-side-text' },
      { title: "media-image", value: "media-image" },
      { title: "media-video", value: "media-video" },
      { title: "Center-Aligned-Content",value: "center-aligned-content" },
      { title: "Center-Aligned-Title-Tabs", value: "center-aligned-title-tabs" },
      { title: "vertical-card", value: "vertical-card" },
      { title: "carousel-with-image", value: "carousel-with-image" },
      { title: "Card-Ends-Aligned-Content",value: "card-ends-aligned-content" },
      { title: "Card-Carousel", value: "card-carousel" }
    ],
    nudge: [
      { title: "Default Nudge", value: "default" },
      { title: "Nudge With Action", value: "nudge-with-action" },
      { title: "Nudge Dual Action", value: "nudge.dual-action" },
      { title: "Banner Nudge", value: "nudge.banner" },
      { title: "Open Url Nudge", value: "nudge.open-url" },
      { title: "Pincode Nudge", value: "pincode" },
      {
        title: "Nudge With background Image and Column aligned dual actions",
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
      {title:"Image-Gallery",value:"image-gallery"},
      {title:"Venue-Enquiry",value:"venue-enquiry"},
      {title:"Event-Enquiry",value:"event-enquiry"},
      {title:"Venue-Details",value:"venue-details"},
      {title:"Video-Pop-Up",value:"video-pop-up"},
      { title: "gallery-with-carousel", value:"gallery-with-carousel" }
    ],
    placeholder:[
         {title:"Toll-Free-Numbers",value:"toll-free-numbers"}
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
