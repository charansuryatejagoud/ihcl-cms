import {actionTypes} from '../../../utils/constants'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class ActionTypes extends Content {
  name: string = 'actionType'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Action Types',
      name: 'actionTypes',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'actionType',
          title: 'Action Type',
          type: 'string',
          options: {
            list: actionTypes,
          },
        },
        {
          name: 'primaryAction',
          title: 'Primary Action',
          type: 'navigationItem',
          hidden: ({parent}: any) => parent?.actionType !== 'primaryAction',
        },
        {
          name: 'secondaryAction',
          title: 'Secondary Action',
          type: 'navigationItem',
          hidden: ({parent}: any) => parent?.actionType !== 'secondaryAction',
        },
        {
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'navigationItem',
          hidden: ({parent}: any) => parent?.actionType !== 'ctaLabel',
        },
        {
          name: 'emptyLink',
          title: 'Empty Link',
          type: 'navigationItem',
          hidden: ({parent}: any) => parent?.actionType !== 'emptyLink',
        },
      ],
    }
  }
}
