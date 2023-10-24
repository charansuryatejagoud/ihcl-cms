import {IoTabletLandscapeOutline as Icon} from 'react-icons/io5'
import {hiddenField} from '../../../utils/shared-utils'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class BlockSection extends Content {
  name = 'blockSection'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Block Section',
      name: 'blockSection',
      type: 'object',
      icon: Icon,
      fields: [
        hiddenField,
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Identifier',
          description: 'This will be used to identify this block when rendering',
          name: 'identifier',
          type: 'string',
        },
        {
          name: 'bgColor',
          title: 'Bg Color',
          type: 'string',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'blockContent',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'identifier',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          return {
            title: `${hiddenIndicator}${title ?? 'Block Section'}`,
            subtitle,
          }
        },
      },
    }
  }
}
