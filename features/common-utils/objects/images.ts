import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Images extends Content {
  name = 'images'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'images',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: 'smallImage',
          title: 'Small Image',
          type: 'image',
          description: 'This will be used for smaller screens like Mobile',
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          type: 'image',
          description: 'This will be used for larger screens like Desktop',
        },
      ],
    }
  }
}
