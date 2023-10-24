import {IoLinkOutline as Icon} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class CfReference extends Content {
  name = 'cfReference'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'cfReference',
      title: 'Content Fragment Reference',
      type: 'object',
      icon: Icon,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'cfs',
          title: 'Content Fragments',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'contentFragment'}],
            },
          ],
        },
      ],
    }
  }
}
