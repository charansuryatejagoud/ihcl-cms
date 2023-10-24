import {Content} from '../../schemas/base'
import {SchemaInputProps} from '../../schemas/types'

export class CancellationDropdown extends Content {
  name: string = 'cancellationDropdown'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'cancellationDropdown',
      title: '[My Account] Cancellation Dropdown',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [
            {
              name: 'value',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'text',
                  type: 'string',
                },
                {
                  name: 'primaryAction',
                  title: 'Primary Action',
                  type: 'navigationItem',
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
