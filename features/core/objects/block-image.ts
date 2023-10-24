import {IoImageOutline as Icon} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {hiddenField} from '../../../utils/shared-utils'

export class BlockImage extends Content {
  name = 'blockImage'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'blockImage',
      title: 'Block Image',
      type: 'object',
      icon: Icon,
      initialValue: {height: 200},
      fields: [
        hiddenField,
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'color',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          description: 'Image that will be used for larger screens like Desktop',
          type: 'image',
        },
        {
          name: 'height',
          title: 'Block Height',
          type: 'number',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'subtitle',
          media: 'image',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden, media}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          return {
            title: `${hiddenIndicator}${title ?? 'Block Image'}`,
            subtitle,
            media,
          }
        },
      },
    }
  }
}
