import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogIn as Icon,
  IoSettings,
} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Authentication extends Content {
  name = 'authentication'
  authenticationTypes = [
    {title: 'Mobile', value: 'mobile'},
    {title: 'Email', value: 'email'},
    {title: 'Forgot Password', value: 'forgotPassword'},
    {title: 'Chambers Membership', value: 'chambersMembership'},
    {title: 'Epicure Membership', value: 'epicureMembership'},
  ]
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'authentication',
      title: 'Authentication',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          name: 'Type',
          title: 'Type',
          type: 'string',
          options: {
            list: this.authenticationTypes,
          },
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          group: 'main',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          group: 'main',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'blockContent',
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.authentication ?? [])],
          },
          group: 'main',
        },
        {
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'navigationItem',
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
      preview: {
        select: {
          title: 'title',
          subtitle: 'subtitle',
          variant: 'variant',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, variant, hidden}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          const variantText = variant ? `(${variant})` : ''

          return {
            title: `${hiddenIndicator}${title ?? '<Authentication>'}`,
            subtitle: `${subtitle ?? ''}${variantText}`,
          }
        },
      },
    }
  }
}
