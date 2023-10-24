import {destinationNavigation} from '../../../../utils/constants'
import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class DestinationSeoInfo extends Content {
  name = 'destinationSeoInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      Title: 'SEO Info',
      name: 'destinationSeoInfo',
      type: 'object',
      preview: {
        select: {
          title: 'navigation',
        },
        prepare({title}: any) {
          return {
            title,
          }
        },
      },
      fields: [
        {
          name: 'navigation',
          title: 'Navigation',
          type: 'string',
          options: {list: destinationNavigation},
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'text',
          rows: 5,
        },
      ],
    }
  }
}
