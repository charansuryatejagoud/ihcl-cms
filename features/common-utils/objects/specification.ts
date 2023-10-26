import {IoApps, IoLayers as Icon, IoSettings} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Specification extends Content {
  name = 'specification'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'specification',
      title: 'Specification',
      type: 'object',
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'comparativeSpefications',
        },
        prepare({title, subtitle}: any) {
          return {
            title: `${title ?? '<Specification>'}`,
            subtitle: `items: ${subtitle.length}`,
          }
        },
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'onHoverText',
          title: 'On Hover Text',
          type: 'text',
          rows: 3,
        },
        {
          name: 'comparativeSpefications',
          title: 'Comparative Spefications',
          type: 'array',
          group: 'main',
          of: [
            {
              type: 'image',
            },
            {
              title: 'Text',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  // title: "Title",
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
