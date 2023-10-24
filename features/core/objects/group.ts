import {IoApps, IoLayers as Icon, IoSettings} from 'react-icons/io5'
import {filterAlignmentTypes, poweredBy} from '../../../utils/constants'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {hiddenField} from '../../../utils/shared-utils'

export const groupAlignmentVariant = [
  {
    title: 'Center',
    value: 'center',
  },
  {
    title: 'Regular',
    value: 'regular',
  },
  {
    title: 'Center Aligned Regular Title',
    value: 'center-aligned-regular-title',
  },
  {
    title: 'Center Aligned Regular Title with No Hyphens',
    value: 'center-aligned-regular-title-with-no-hyphens',
  },
  {
    title: 'Left Aligned with Hyphens',
    value: 'left-aligned-regular-title-with-hyphens',
  },
  {
    title: 'Right Aligned Title',
    value: 'right-aligned-title',
  },
  {
    title: 'Center Aligned Regular Title Variable Font Size',
    value: 'center-aligned-regular-title-variable-font-size',
  },
  {
    title: 'Center with Left Hyphen',
    value: 'center-with-left-hyphen',
  },
]

export const groupPreview = {
  select: {
    title: 'title.desktopTitle',
    items: 'items',
    subtitle: 'subtitle',
    hidden: 'isHidden',
  },
  prepare({title, items, subtitle, hidden}: any) {
    const count = items?.length || 0
    const countText = count === 1 ? '1 item' : `${count} items`
    const hiddenIndicator = hidden ? '🚫 ' : ''
    return {
      title: `${hiddenIndicator}${title ?? '<Group>'}`,
      subtitle: `${subtitle || ''} (${countText})`,
    }
  },
}

export class Group extends Content {
  name: string = 'Group'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'group',
      title: 'Group',
      type: 'object',
      initialValue: {hasAllLink: false, allowAdditionalParameters: false},
      icon: Icon,
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
          title: 'Title',
          name: 'title',
          type: 'title',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'charactersLimit',
          title: 'Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for group subtitle.',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
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
            list: groupAlignmentVariant,
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
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.group ?? [])],
          },
          group: 'main',
        },
        {
          name: 'isComponentFullWidth',
          title: 'Is Component Full Width',
          type: 'boolean',
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.group ?? [])],
          },
          group: 'main',
        },
        {
          name: 'giftCardCategory',
          title: 'Gift Card Category',
          type: 'reference',
          to: [{type: 'giftCardGroup'}],
          description: 'This Field is a Reference to specify Gift Card Category',
          hidden: ({parent}: any) =>
            parent?.largeVariant != 'giftCards.group.2-by-3-grid' &&
            parent?.variant != 'giftCards.group.2-by-3-grid',
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          group: 'main',
        },
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
          name: 'backgroundImage',
          title: 'Large Background Image',
          type: 'image',
          group: 'main',
        },
        {
          name: 'mobileBackgroundImage',
          title: 'Mobile Background Image',
          type: 'image',
          group: 'main',
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
        {
          name: 'hasAlternateAllLink',
          title: 'Allow alternate More link',
          type: 'boolean',
          group: 'main',
        },
        {
          name: 'alternateAllLinks',
          title: 'Alternate See all',
          type: 'array',
          of: [{type: 'navigationItem'}],
          hidden: ({parent}: any) => !parent?.hasAlternateAllLink,
          group: 'main',
          options: {
            collapsible: true,
            collapsed: true,
          },
        },
        {
          name: 'isDynamicComponent',
          title: 'is Dynamic Component',
          type: 'boolean',
          description: 'This field is for Load More Option for dynamically managing the items',
          group: 'main',
        },
        {
          name: 'preRenderItemsCount',
          title: 'Pre Render Items Count',
          type: 'number',
          hidden: ({parent}: any) => !parent?.isDynamicComponent,
        },
        {
          name: 'postRenderItemsCount',
          title: 'Post Render Items Count',
          type: 'number',
          hidden: ({parent}: any) => !parent?.isDynamicComponent,
        },
        {
          name: 'filterConfig',
          title: 'Filter Config',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'enableFilter',
                  title: 'Enable Filter',
                  type: 'boolean',
                },
                {
                  name: 'filterPlaceholder',
                  title: 'Filter Placeholder',
                  type: 'string',
                },
                {
                  name: 'filterTerm',
                  title: 'Filter Term',
                  type: 'string',
                },
                {
                  name: 'iconColor',
                  value: 'Icon Color',
                  type: 'color',
                },
                {
                  name: 'filterType',
                  title: 'Filter Type',
                  type: 'string',
                  options: {
                    list: [
                      {
                        title: 'Dropdown',
                        value: 'dropdown',
                      },
                      {
                        title: 'Search Field',
                        value: 'searchField',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'filterAlignment',
          title: 'Filter Alignment',
          type: 'string',
          options: {
            list: filterAlignmentTypes,
          },
        },
        {
          name: 'tabsConfig',
          title: 'Tabs Config',
          type: 'object',
          fields: [
            {
              name: 'enableTabs',
              title: 'Enable Tabs',
              type: 'boolean',
            },
            {
              name: 'largeVariant',
              title: 'Large Variant',
              type: 'string',
              options: {
                list: [...(variants?.group ?? [])],
              },
            },
            {
              name: 'mobileVariant',
              title: 'Mobile Variant',
              type: 'string',
              options: {
                list: [...(variants?.group ?? [])],
              },
            },
            {
              name: 'minimumItems',
              title: 'Minimum Items',
              type: 'number',
            },
            {
              name: 'tabTerm',
              title: 'Tab Term',
              type: 'string',
            },
            {
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string',
            },
          ],
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [...(items?.groupItems ?? [])],
          group: 'main',
        },
        {
          name: 'allowAdditionalParameters',
          type: 'boolean',
          title: 'Allow Additional Parameters',
          group: 'main',
        },
        {
          name: 'parameterMap',
          title: 'Parameter Map',
          description: 'Parameters as a set of key-value pairs',
          hidden: ({parent}: any) => !parent.allowAdditionalParameters,
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
      preview: groupPreview,
    }
  }
}
