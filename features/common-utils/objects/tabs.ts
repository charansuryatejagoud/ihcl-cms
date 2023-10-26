import {IoSquare, IoTabletLandscape} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import { hiddenField } from '../../../utils/shared-utils'

export class Tabs extends Content {
  name = 'tabsComponent'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'tabsComponent',
      title: 'Tabs',
      type: 'object',
      icon: IoTabletLandscape,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
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
          options: {
            list: [...(variants?.tabs ?? [])],
          },
        },
        {
          name: 'image',
          title: 'Image',
          type: 'array',
          of: [{type: 'image'}],
        },
        {
          name: 'tabs',
          title: 'Tabs',
          type: 'array',
          of: [{type: 'tab'}],
        },
      ],
      preview: {
        select: {
          title: 'title',
          variant: 'variant',
          items: 'tabs',
        },
        prepare({title, variant, items}: any) {
          const count = items?.length || 0
          const countText = count === 1 ? '1 Tab' : `${count} Tabs`
          return {
            title: `${title ?? '<Tabs>'}`,
            subtitle: `${variant ?? ''}(${countText})`,
          }
        },
      },
    }
  }
}

export class Tab extends Content {
  name = 'tab'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'tab',
      title: 'Tab',
      type: 'object',
      icon: IoSquare,
      fields: [
        {
          ...hiddenField
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'tabItems',
          title: 'Tab Items',
          type: 'array',
          of: [...(items?.groupItems ?? [])],
        },
      ],
      preview: {
        select: {
          title: 'title',
          items: 'tabItems',
          hidden: 'isHidden',
        },
        prepare({title, items, hidden}: any) {
          const count = items?.length || 0
          const countText = count === 1 ? '1 Item' : `${count} Items`
          const hiddenIndicator = hidden ? '🚫 ' : ''
          return {
            title: `${hiddenIndicator} ${title ?? '<Tab>'} ${title ? '-Tab' : ''}`,
            subtitle: `(${countText})`,
          }
        },
      },
    }
  }
}
