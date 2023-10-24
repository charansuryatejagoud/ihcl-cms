import {IoApps, IoConstruct as Icon, IoSettings, IoConstruct} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Custom extends Content {
  name = 'custom'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'custom',
      title: 'Custom',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoConstruct},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [...(items?.customItems ?? [])],
          group: 'main',
          validation: (Rule: any) => Rule.required().length(1),
        },
      ],
    }
  }
}
