import {Schema} from 'sanity'
import {SchemaInputProps} from './types'

export abstract class Content {
  abstract name: string
  abstract getSchema({variants, items}: SchemaInputProps): Schema | any
}
