import {IoLogoWebComponent as Icon} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class ConnectedStore extends Content {
  name = 'connectedStore'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'connectedStore',
      title: 'Connected Store',
      type: 'object',
      icon: Icon,
      fields: [
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.connectedStores ?? [])],
          },
        },
      ],
      preview: {
        select: {
          title: 'variant',
        },
      },
    }
  }
}
