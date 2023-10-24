import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class CategoriesInfo extends Content {
  name = 'categoriesInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'categoriesInfo',
      title: 'Categories',
      type: 'object',
      fields: [
        {name: 'category', type: 'string', title: 'Category'},
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }
  }
}
