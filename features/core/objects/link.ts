import {IoApps, IoSettings, IoLink as Icon} from 'react-icons/io5'
import {PageLink} from '../../../components/page-link/PageLink'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {linkType, pathUrlRule} from '../../../utils/shared-utils'
import {LinkTypeField} from './link-type-field'

export class Link extends Content {
  name: string = 'link'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'link',
      title: 'Link',
      type: 'object',
      icon: Icon,
      initialValue: {type: linkType.internal, variant: 'text'},
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
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
          name: 'description',
          title: 'Description',
          type: 'string',
          group: 'main',
        },
        new LinkTypeField({name: 'type', title: 'type'}).getSchema(),
        {name: 'ctaLabel', title: 'Cta Label', type: 'string'},
        {
          name: 'url',
          title: 'Url',
          type: 'url',
          validation: pathUrlRule,
          components: {input: PageLink('type')},
          group: 'main',
        },
        {
          name: 'mediaIcons',
          title: 'Media Icons',
          type: 'array',
          of: [
            {
              type: 'navigationItem',
            },
          ],
          group: 'main',
        },
        {
          name: 'image',
          title: 'Image',
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
          title: 'Representation of Link',
          type: 'string',
          options: {
            list: [
              {title: 'Text', value: 'text'},
              {title: 'Icon', value: 'icon'},
              {title: 'Button', value: 'button'},
              {title: 'Search', value: 'search'},
              {title: 'Menu', value: 'menu'},
              {title: 'Chip', value: 'chip'},
              {title: 'Full Width Button', value: 'fullWidthButton'},
              {title: 'Text Underline', value: 'linkUnderline'},
              {title: 'Share', value: 'share'},
            ],
          },
          group: 'main',
        },
        {
          name: 'isGradientEnabled',
          title: 'Is Gradient Enabled',
          type: 'boolean',
        },
        {
          name: 'gradient',
          title: 'Gradient',
          type: 'string',
          hidden: ({parent}: any) => !parent?.isGradientEnabled,
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'color',
          hidden: ({parent}: any) => parent?.isGradientEnabled,
        },
      ],
      preview: {
        select: {
          title: 'title',
          media: 'image',
        },
      },
    }
  }
}
