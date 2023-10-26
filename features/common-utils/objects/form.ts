import {IoApps, IoSettings} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Form extends Content {
  name = 'form'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Form',
      name: 'formComponent',
      type: 'object',
      options: {collapsed: false, collapsible: true},
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
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
          type: 'text',
          rows: 6,
          group: 'main',
        },
        {
          name: 'logo',
          title: 'logo',
          type: 'image',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {list: [...(variants?.forms ?? [])]},
          group: 'main',
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {list: [...(variants?.forms ?? [])]},
          group: 'main',
        },
        {
          title: 'Is Multi Block Content?',
          name: 'isMultiBlockContent',
          type: 'boolean',
        },
        {
          title: 'Content',
          name: 'singleContent',
          type: 'blockContent',
          hidden: ({parent}: any) => parent?.isMultiBlockContent,
        },
        {
          title: 'Multi Block Contents',
          name: 'content',
          type: 'array',
          of: [
            {
              type: 'blockSection',
            },
          ],
          hidden: ({parent}: any) => !parent?.isMultiBlockContent,
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{type: 'inputField'}],
          group: 'main',
        },
        {
          name: 'PrimaryAction',
          title: 'Primary Action',
          type: 'navigationItem',
          group: 'main',
        },
        {
          name: 'secondaryAction',
          title: 'Secondary Action',
          type: 'navigationItem',
          group: 'main',
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
            title: `${hiddenIndicator}${title ?? '<Form>'}`,
            subtitle: `${subtitle ?? ''}${variantText}`,
          }
        },
      },
    }
  }
}
