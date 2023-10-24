export interface VariantDefinition {
  value: string
  title: string
}

export interface DialogSizeDefinition {
  value: string
  title: string
}

export interface SchemaItem {
  type: string
}

export interface PlainSchema {
  name: string
  type: string
  [key: string]: any
}

export interface DummySchema {
  name: string
  data: object
}

export interface ReferenceItem {
  type: 'reference'
  title: string
  weak?: boolean
  to: SchemaItem[]
}

export type FeatureSchemaDefinition = Partial<FeatureSchemaProperties>

export class FeatureSchemaProperties {
  items: Partial<SchemaItemsProperties> | undefined
  schemas: Partial<object>[] | undefined
  variants?: VariantSchemaDefinition
  dialogSize?: DialogSizeSchemaDefinition
}

export type VariantSchemaDefinition = Partial<VariantSchemaProperties>
export type DialogSizeSchemaDefinition = Partial<DialogSizeSchemaProperties>

export class SchemaItemsProperties {
  pageItems: SchemaItem[] = []
  connectedStores: VariantDefinition[] = []
  headers: SchemaItem[] = []
  footers: SchemaItem[] = []
  groupItems: SchemaItem[] = []
  customItems: SchemaItem[] = []
}

export class VariantSchemaProperties {
  placeholder: VariantDefinition[] = []
  connectedStores: VariantDefinition[] = []
  navigation: VariantDefinition[] = []
  group: VariantDefinition[] = []
  nudge: VariantDefinition[] = []
  card: VariantDefinition[] = []
  dialog: VariantDefinition[] = []
  ifElseBlock: VariantDefinition[] = []
  switchCaseBlock: VariantDefinition[] = []
  dataGrid: VariantDefinition[] = []
  banner: VariantDefinition[] = []
  contentFragment: VariantDefinition[] = []
  stepper: VariantDefinition[] = []
  tabs: VariantDefinition[] = []
  forms: VariantDefinition[] = []
  inputField: VariantDefinition[] = []
  authentication: VariantDefinition[] = []
}

export class DialogSizeSchemaProperties {
  dialog: DialogSizeDefinition[] = []
}

export interface SchemaInputProps {
  variants?: VariantSchemaProperties
  items?: SchemaItemsProperties
}

export interface LinkTypeFieldProps {
  name: string
  title: string
  group?: string
}
