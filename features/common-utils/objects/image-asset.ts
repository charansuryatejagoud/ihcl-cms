import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class ImageAsset extends Content {
  name = 'imageAsset'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'imageAsset',
      title: 'Image Asset',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'array',
          of: [{type: 'image'}],
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          type: 'array',
          of: [{type: 'image'}],
        },
      ],
    }
  }
}
