import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Epicure extends Content {
  name = 'epicure'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Epicure',
      name: 'epicure',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'identifier',
          title: 'Identifier',
          type: 'string',
        },
        {
          name: 'tabularData',
          title: 'Tabular Data',
          type: 'array',
          of: [
            {
              name: 'rowData',
              type: 'applicableBenefits',
            },
          ],
        },
      ],
    }
  }
}
