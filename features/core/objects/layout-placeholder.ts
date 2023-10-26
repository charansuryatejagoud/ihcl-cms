import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
  IoSettings,
} from 'react-icons/io5'
import {headings, contentTypes, subContentTypes, filterAlignmentTypes} from '../../../utils/constants'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {hiddenField} from '../../../utils/shared-utils'
import {groupAlignmentVariant} from './group'
import {AlignmentVariant} from './card'

export class LayoutPlaceholder extends Content {
  name: string = 'layoutPlaceholder'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'layoutPlaceholder',
      title: 'Layout Placeholder',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {...hiddenField, group: 'main'},
        {
          title: 'Placeholder Title',
          name: 'title',
          type: 'title',
        },
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          name: 'groupMobileVariant',
          title: 'Group Mobile Variant',
          type: 'string',
          options: {
            list: [...(variants?.group ?? [])],
          },
          group: 'main',
        },
        {
          name: 'groupLargeVariant',
          title: 'Group Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.group ?? [])],
          },
          group: 'main',
        },
        {
          name: 'cardMobileVariant',
          title: 'Card Mobile Variant',
          type: 'string',
          options: {
            list: [...(variants?.card ?? [])],
          },
          group: 'main',
        },
        {
          name: 'cardLargeVariant',
          title: 'Card Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.card ?? [])],
          },
          group: 'main',
        },
        {
          name: 'isMobileComponentFullWidth',
          title: 'is Mobile Component Full Width',
          type: 'boolean',
          description: 'This is used to handle Full width for the Mobile Component',
        },
        {
          name: 'isComponentFullWidth',
          title: 'Is Component Full Width',
          type: 'boolean',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
        {
          name: 'charactersLimit',
          title: 'Group Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for placeholder description.',
        },
        {
          name: 'mobileCharactersLimit',
          title: 'Mobile Group Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for placeholder description.',
        },
        {
          name: 'cardCharactersLimit',
          title: 'Card Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for placeholder description.',
        },
        {
          name: 'mobileCardCharactersLimit',
          title: 'Mobile Card Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for placeholder description.',
        },
        {
          name: 'alignmentVariant',
          title: 'Alignment Variant',
          type: 'string',
          description: 'This variant is for Title and Subtitle alignment',
          options: {
            list: groupAlignmentVariant,
          },
          group: 'main',
        },
        {
          type: 'string',
          name: 'headingElementForCard',
          description: 'Choose the heading tag to be rendered for Card Title',
          options: {list: headings},
        },
        {
          name: 'cardAlignmentVariant',
          title: 'Card Alignment Variant',
          type: 'string',
          description: 'This variant is for Hypen preceding the Title  for card',
          options: {
            list: AlignmentVariant,
          },
          group: 'main',
        },
        {
          name: 'contentType',
          title: 'Content Type',
          type: 'string',
          options: {
            list: contentTypes,
          },
          group: 'main',
        },
        {
          name: 'subContentType',
          title: 'Sub Content Type',
          type: 'string',
          options: {
            list: subContentTypes,
          },
          group: 'main',
          hidden: ({parent}: any) => parent?.contentType !== 'hotelWellness',
        },
        {
          name: 'filterAlignment',
          title: 'Filter Alignment',
          type: 'string',
          options: {list: filterAlignmentTypes},
        },
        {
          name: 'parameterMap',
          title: 'Parameter Map',
          description: 'Parameters as a set of key-value pairs',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Parameter',
              icon: ParameterMapIcon,
              options: {columns: 2},
              fields: [
                {
                  name: 'key',
                  title: 'Key',
                  type: 'string',
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
                {
                  name: 'colSize',
                  title: 'Column Size',
                  type: 'number',
                },
              ],
              preview: {
                select: {
                  title: 'key',
                  subtitle: 'value',
                },
              },
            },
          ],
          group: 'main',
        },
        {
          name: 'groupActionType',
          title: 'Group Action Type',
          type: 'array',
          of: [{type: 'actionTypes'}],
        },
        {
          name: 'cardActionType',
          title: 'Card Action Type',
          type: 'array',
          of: [{type: 'actionTypes'}],
        },
      ],
      preview: {
        select: {
          title: 'title.desktopTitle',
          subtitle: 'subtitle',
          variant: 'variant',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, variant, hidden}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          const variantText = variant ? `(${variant})` : ''

          return {
            title: `${hiddenIndicator}${title?.toString() ?? '<Layout Placeholder>'}`,
            subtitle: `${subtitle ?? ''}${variantText}`,
          }
        },
      },
    }
  }
}
