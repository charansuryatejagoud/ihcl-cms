import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {IoBrowsers as Icon} from 'react-icons/io5'

export class Dialog extends Content {
  name = 'dialog'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'dialog',
      title: 'Dialog',
      type: 'document',
      icon: Icon,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'description',
          type: 'string',
        },
        {
          name: 'path',
          title: 'Path',
          type: 'string',
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.dialog ?? [])],
          },
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.dialog ?? [])],
          },
        },
        {
          name: 'backgroundStyle',
          title: 'BackgroundStyle',
          type: 'string',
          options: {
            list: [
              {title: 'Default', value: 'normal'},
              {title: 'Hamburger Menu', value: 'hamburger'},
            ],
          },
        },
        {
          name: 'itemsRepresentation',
          title: 'Items Representation',
          type: 'string',
          options: {
            list: [
              {title: 'Vertical List', value: 'list'},
              {title: 'Tabs', value: 'tabs'},
              {title: 'Single Item', value: 'single'},
            ],
          },
        },
        {
          name: 'tabItemSize',
          title: 'Tab Item Size',
          type: 'string',
          hidden: ({parent}: any) => parent?.itemsRepresentation != 'tabs',
          options: {
            list: [
              {title: 'Fixed', value: 'fixed'},
              {title: 'Dynamic', value: 'dynamic'},
            ],
          },
        },
        {
          name: 'dialogSize',
          title: 'Dialog Size',
          type: 'string',
          options: {
            list: [
              {
                title: 'Small',
                value: 'small',
              },
              {
                title: 'Medium',
                value: 'medium',
              },
              {
                title: 'Large',
                value: 'large',
              },
            ],
          },
        },
        {
          title: 'Items',
          name: 'items',
          type: 'array',
          of: [...(items?.pageItems ?? [])],
        },
        {
          title: 'Dialog Headers',
          name: 'headers',
          type: 'array',
          of: [...(items?.headers ?? [])],
        },
        {
          title: 'Connected Stores',
          name: 'connectedStores',
          type: 'array',
          of: [{type: 'connectedStore'}],
        },
        {
          title: 'Dialog Footers',
          name: 'footers',
          type: 'array',
          of: [...(items?.footers ?? [])],
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
        },
      },
    }
  }
}
