import {headings} from '../../../utils/constants'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Title extends Content {
  name = 'title'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Title',
      name: 'title',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          type: 'array',
          name: 'desktopTitle',
          description: 'This Title is used for the Larger Screens like Desktop',
          of: [
            {
              type: 'string',
              name: 'value',
            },
          ],
        },
        {
          type: 'array',
          name: 'mobileTitle',
          description: 'This Title is used for the Smaller Screens like Mobile',
          of: [
            {
              type: 'string',
              name: 'value',
            },
          ],
        },
        {
          type: 'string',
          name: 'headingElement',
          description: 'Choose the heading element to be rendered',
          options: {list: headings},
        },
      ],
    }
  }
}
