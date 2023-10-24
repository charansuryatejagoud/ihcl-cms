import {Content} from '../../schemas/base'
import {SchemaInputProps} from '../../schemas/types'

export class WeddingAssets extends Content {
  name = 'weddingAssets'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'weddingAssets',
      title: '[Events] Wedding Assets',
      type: 'object',
      fields: [
        {
          name: 'firstItemWidth',
          type: 'string',
        },
        {
          name: 'lastItemWidth',
          type: 'string',
        },
        {
          name: 'itemsData',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'col',
                  title: 'Column Alignment',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Left', value: 'left'},
                      {title: 'Right', value: 'right'},
                      {title: 'Middle', value: 'middle'},
                    ],
                  },
                },
                {
                  name: 'items',
                  type: 'array',
                  of: [{type: 'weddingMedia'}],
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
