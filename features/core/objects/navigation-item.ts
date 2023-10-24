import {IoNavigate as Icon} from 'react-icons/io5'
import {pathUrlRule} from '../../../utils/shared-utils'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {LinkTypeField} from './link-type-field'
import {featureVariants} from '../../../utils/constants'
const buttonVariants = [
  {title: 'Light Contained', value: 'light-contained'},
  {title: 'Dark Contained', value: 'dark-contained'},
  {title: 'Light Outlined', value: 'light-outlined'},
  {title: 'Dark Outlined', value: 'dark-outlined'},
  {title: 'Link', value: 'link'},
  {title: 'Link With Back Navigation', value: 'link-with-back-navigation'},
]
export class NavigationItem extends Content {
  name = 'navigationItem'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'navigationItem',
      title: 'Navigation Item',
      type: 'object',
      icon: Icon,
      initialValue: {
        featureVariant: 'default',
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'string',
          validation: pathUrlRule,
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'featureVariant',
          title: 'Feature Variant',
          type: 'string',
          options: {
            list: [...featureVariants],
          },
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...buttonVariants],
          },
        },
        new LinkTypeField({name: 'urlType', title: 'urlType'}).getSchema(),
        {
          name: 'allowOnHoverProperty',
          title: 'Allow OnHover Property',
          type: 'boolean',
        },
        {
          name: 'OnHoverField',
          title: 'OnHover Field',
          type: 'linkOnHover',
          hidden: ({parent}: any) => !parent?.allowOnHoverProperty,
        },
      ],
      preview: {
        select: {
          title: 'title',
        },
      },
    }
  }
}
