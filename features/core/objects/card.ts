import {IoApps, IoCard as Icon, IoSettings} from 'react-icons/io5'
import {hiddenField, linkType, pathUrlRule} from '../../../utils/shared-utils'
import {SchemaInputProps} from '../../../schemas/types'
import {Content} from '../../../schemas/base'
import {headings, poweredBy} from '../../../utils/constants'
import {PageLink} from '../../../components/page-link/PageLink'
import {LinkTypeField} from './link-type-field'

export const AlignmentVariant = [
  {title: 'Preceding Hyphen Title', value: 'preceding-hyphen-title'},
  {title: 'Normal Title', value: 'normal-title'},
  {
    title: 'Regular Title Variable Font Size',
    value: 'regular-title-variable-font-size',
  },
]

export class Card extends Content {
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'card',
      title: 'Card',
      type: 'object',
      icon: Icon,
      initialValue: {urlType: linkType.internal, isMultiBlockContent: false},
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
        {name: 'analyticsConfig', title: 'Analytics Config', icon: IoSettings},
      ],
      fields: [
        {
          ...hiddenField,
          group: 'configuration',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          group: 'main',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'term',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 6,
          group: 'main',
        },
        {
          name: 'charactersLimit',
          title: 'Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for card description.',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
        {
          name: 'alignmentVariant',
          title: 'Alignment Variant',
          type: 'string',
          description: 'This variant is for Title and Subtitle alignment',
          options: {
            list: AlignmentVariant,
          },
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.card ?? [])],
          },
          group: 'main',
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.card ?? [])],
          },
          group: 'main',
        },
        {
          title: 'isHeroTitleFont',
          name: 'isHeroTitleFont',
          type: 'boolean',
          initialValue: false,
          description:
            'This is used for the handling the Title Font Size of the very First Component',
          hidden: ({parent}: any) =>
            parent?.largeVariant !=
              'details.card.card-with-right-media-left-content-aspect-ratio-2:4' &&
            parent?.largeVariant !=
              'details.card.card-with-left-media-right-content-aspect-ratio-2:4',
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
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'string',
          group: 'main',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'url',
          components: {input: PageLink('urlType')},
          validation: pathUrlRule,
          group: 'main',
        },
        new LinkTypeField({name: 'urlType', title: 'Url Type'}).getSchema(),
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
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
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          group: 'main',
        },
        {
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              {title: 'Video', value: 'video'},
              {title: 'Component', value: 'component'},
              {title: 'Image', value: 'image'},
            ],
          },
        },
        {
          name: 'videoAsset',
          title: 'Video',
          type: 'videoAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'video' && parent?.largeVariant !== 'video',
        },
        {
          name: 'imageAsset',
          title: 'Image',
          type: 'imageAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'image' && parent?.largeVariant !== 'image',
        },
        {
          title: 'Components',
          name: 'components',
          type: 'component',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'component' && parent?.largeVariant !== 'component',
        },
        {
          name: 'filterTerm',
          title: 'Filter Term',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'term',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'tabTerm',
          title: 'Tab Term',
          type: 'string',
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
          type: 'string',
          name: 'headingElementForCard',
          description: 'Choose the heading tag to be rendered for Card Title',
          options: {list: headings},
        },
        {
          name: 'specificationTags',
          title: 'Specification Tags',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'tag',
                  title: 'Tag',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'primaryAction',
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
        {
          name: 'cardActionType',
          title: 'Card Action Types',
          type: 'array',
          of: [{type: 'actionTypes'}],
        },
        {
          name: 'analytics',
          title: 'Analytics',
          type: 'object',
          fields: [
            {
              name: 'clickEvent',
              title: 'Click Event',
              type: 'string',
            },
            {
              name: 'poweredBy',
              title: 'Powered By',
              type: 'string',
              options: {list: poweredBy},
            },
          ],
          group: 'analyticsConfig',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
          media: 'image',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden, media}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''

          return {
            title: `${hiddenIndicator}${title ?? '<Card>'}`,
            subtitle,
            media,
          }
        },
      },
    }
  }
  name = 'card'
}
