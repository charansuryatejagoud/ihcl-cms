import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Seo extends Content {
  name = 'seo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
        },
      ],
    }
  }
}
