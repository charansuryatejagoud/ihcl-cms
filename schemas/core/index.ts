import { FeatureSchemaDefinition } from "../types";
import link from "./objects/link";
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
import brand from "./documents/brand";
import metadata from "./objects/metadata";
import empty from "./objects/empty";
import video from "./objects/video";
import faqs from "./objects/faqs";
import appConfig from "./documents/appConfig";
import fileDocument from "./objects/fileDocument";
import reorderTransformer from "./transformers/reorder.transformer";
import { cellSchema, rowSchema } from "./objects/dataGrid";
import formGroup from "./objects/form-group";
import navigationItem from "./objects/navigationItem";

export const core: FeatureSchemaDefinition = {
  schemas: [
    category,
    settings,
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
    formGroup,
  ],
  transformers: [reorderTransformer],
  headers: [],
  footers: [
    {
      type: "blockSection",
    },
  ],
  pageItems: [
    { type: "groupLayout" },
    { type: "cardLayout" },
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
  ],
  groupItems: [
    {
      type: "card",
    },
    {
      type: "cardLayout",
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
  variants: {},
};
