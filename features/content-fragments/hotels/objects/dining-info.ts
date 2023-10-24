import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class DiningInfo extends Content {
  name = 'diningInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'diningInfo',
      title: 'Dining Info',
      type: 'object',
      fields: [
        {
          name: 'basicInfo',
          title: 'Basic Info',
          type: 'basicDetails',
        },
        {name: 'url', type: 'string', title: 'URL'},
        {name: 'code', type: 'string', title: 'Code'},
        {name: 'type', type: 'string', title: 'Type'},
      ],
      preview: {
        select: {
          title: 'basicInfo',
        },
        prepare(selection:any) {
          const {title} = selection
          return {
            title: title.title,
          }
        },
      },
    }
  }
}
