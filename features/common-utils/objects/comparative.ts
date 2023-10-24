import {IoApps, IoSettings} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Comparative extends Content {
  name = 'comparative'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'comparative',
      title: 'Comparative',
      type: 'object',
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          type: 'image',
        },
        {
          name: 'primaryAction',
          title: 'Primary Action',
          type: 'navigationItem',
        },
        {
          name: 'secondaryAction',
          title: 'Secondary Action',
          type: 'navigationItem',
        },
      ],
    }
  }
}
