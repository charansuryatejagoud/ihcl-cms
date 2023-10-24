import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class ColumnData extends Content {
  name = 'columnData'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Column Data',
      name: 'columnData',
      type: 'object',
      fields: [
        {
          title: 'Column Title',
          name: 'columnTitle',
          type: 'string',
        },
        {
          title: 'Column Info',
          name: 'columnInfo',
          type: 'boolean',
        },
      ],
    }
  }
}
