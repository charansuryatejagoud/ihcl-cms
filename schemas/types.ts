export interface VariantDefinition {
  value: string;
  title: string;
}

export interface DialogSizeDefinition {
  value: string;
  title: string;
}

export interface SchemaItem {
  type: string;
}

export interface Schema {
  name: string;
  type: string;
  [key: string]: any;
}

export interface ReferenceItem {
  type: "reference";
  title: string;
  weak?: boolean;
  to: SchemaItem[];
}

export type FeatureSchemaDefinition = Partial<FeatureSchemaProperties>;

export class FeatureSchemaProperties {
  pageItems: (SchemaItem | ReferenceItem)[];
  connectedStores: VariantDefinition[];
  headers: SchemaItem[];
  footers: SchemaItem[];
  groupItems: SchemaItem[];
  schemas: Schema[];
  variants: VariantSchemaDefinition;
  dialogSize: DialogSizeSchemaDefinition;
  transformers: Schema[];
}

export type VariantSchemaDefinition = Partial<VariantSchemaProperties>;
export type DialogSizeSchemaDefinition = Partial<DialogSizeSchemaProperties>;

export class VariantSchemaProperties {
  placeholder: VariantDefinition[];
  connectedStores: VariantDefinition[];
  navigation: VariantDefinition[];
  group: VariantDefinition[];
  nudge: VariantDefinition[];
  card: VariantDefinition[];
  dialog: VariantDefinition[];
  ifElseBlock: VariantDefinition[];
  switchCaseBlock: VariantDefinition[];
  dataGrid: VariantDefinition[];
  banner: VariantDefinition[];
  contentFragment: VariantDefinition[];
  stepper: VariantDefinition[];
  tabs: VariantDefinition[];
  forms: VariantDefinition[];
  inputField: VariantDefinition[];
  categoryHighlights: VariantDefinition[];
}

export class DialogSizeSchemaProperties {
  dialog: DialogSizeDefinition[];
}
