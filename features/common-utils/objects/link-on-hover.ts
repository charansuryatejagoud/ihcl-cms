import {IoApps, IoLink as Icon} from 'react-icons/io5'
import {pathUrlRule} from '../../../utils/shared-utils'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {LinkTypeField} from '../../core/objects/link-type-field'

const buttonVariants = [
  {title: 'Light Contained', value: 'light-contained'},
  {title: 'Dark Contained', value: 'dark-contained'},
  {title: 'Light Outlined', value: 'light-outlined'},
  {title: 'Dark Outlined', value: 'dark-outlined'},
  {title: 'Link', value: 'link'},
]

export class LinkOnHover extends Content {
  name = 'linkOnHover'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'linkOnHover',
      title: 'Link On Hover',
      type: 'object',
      icon: Icon,
      groups: [{name: 'main', title: 'Main', icon: IoApps}],
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'string',
          validation: pathUrlRule,
        },
        new LinkTypeField({name: 'urlType', title: 'Url Type'}).getSchema(),
        {
          name: 'image',
          title: 'Image',
          description: 'Image that will be used for smaller screens like Mobile',
          type: 'image',
          group: 'main',
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          description: 'Image that will be used for larger screens like Desktop',
          type: 'image',
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...buttonVariants],
          },
        },
      ],
    }
  }
}
