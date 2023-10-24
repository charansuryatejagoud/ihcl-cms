import {Content} from '../../schemas/base'
import {SchemaInputProps} from '../../schemas/types'

export class MembershipLogin extends Content {
  name = 'membershipLogin'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'membershipLogin',
      title: '[Authentication] Membership Login',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'blockContent',
        },
        {
          name: 'type',
          title: 'Type',
          type: 'array',
          of: [
            {
              name: 'value',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'primaryAction',
                  title: 'Primary Action',
                  type: 'navigationItem',
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
