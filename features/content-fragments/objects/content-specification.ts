import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class ContentSpecification extends Content {
  name = 'contentSpecification'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'contentSpecification',
      title: 'Content Specification',
      type: 'object',
      fields: [
        {
          name: 'keyType',
          title: 'Key Type',
          type: 'string',
          options: {
            list: [
              {title: 'String', value: 'string'},
              {title: 'Image', value: 'image'},
              {title: 'Component', value: 'component'},
            ],
          },
        },
        {
          name: 'imageAsset',
          title: 'Image',
          type: 'imageAsset',
          hidden: ({parent}: any) => parent?.keyType !== 'image',
        },
        {
          name: 'key',
          title: 'Key',
          type: 'string',
          hidden: ({parent}: any) => parent?.keyType !== 'string',
        },
        {name: 'value', type: 'string', title: 'Value'},
      ],
      preview: {
        select: {
          title: 'key',
          image: 'imageAsset',
          altTitle: 'value',
        },
        prepare(selection: any) {
          const {title, image, altTitle} = selection
          return {
            title: title ?? altTitle,
          }
        },
      },
    }
  }
}
