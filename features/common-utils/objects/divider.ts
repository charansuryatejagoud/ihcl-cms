import {RiSeparator as Icon} from 'react-icons/ri'
import {IoApps, IoSettings} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Divider extends Content {
  name = 'divider'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'divider',
      title: 'Divider',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          name: 'thickness',
          title: 'Thickness',
          type: 'string',
          options: {
            list: [
              {title: 'Thin', value: 'thin'},
              {title: 'Thick', value: 'thick'},
            ],
          },
        },
        {
          name: 'isFullWidth',
          title: 'Is full width?',
          type: 'boolean',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [
              {title: 'Default', value: 'default'},
              {title: 'Gradient', value: 'gradient'},
            ],
          },
          initialValue: 'default',
        },
        {
          name: 'color',
          title: 'Color',
          type: 'color',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
      ],
    }
  }
}
