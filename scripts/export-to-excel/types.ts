///////////////// Type definitions //////////////////////
export type WidgetMetadata = {
  title?: string;
  identifier?: string;
  contentType?: string;
  contentSubType?: string;
  brand?: string;
};

export type Card = {
  title?: string;
  url: string;
  metadata?: WidgetMetadata;
};
export type Nudge = {
  title?: string;
  url: string;
  secondaryUrl?: string;
  metadata?: WidgetMetadata;
};
export type Page = {
  path: string;
  title: string;
  nudges: Nudge[];
  cards: Card[];
};

export type PageRow = {
  cardTitle?: string;
  cardUrl?: string;
  pageTitle?: string;
  pagePath: string;

  metadataTitle?: string;
  metadataIdentifier?: string;
  metadataContentType?: string;
  metadataContentSubType?: string;
  metadataBrand?: string;
};

type SanityDataset = "develop" | "staging" | "production";
export type Configuration = {
  dataset: SanityDataset;
  paths: string[];
  outputPath: string;
};
