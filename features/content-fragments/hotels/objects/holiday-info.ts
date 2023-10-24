import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class HolidayInfo extends Content {
  name = 'holidayInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'holidayInfo',
      title: 'Holiday Info',
      type: 'object',
      fields: [
        {
          name: 'basicInfo',
          title: 'Basic Info',
          type: 'basicDetails',
        },
        {name: 'code', type: 'string', title: 'Code'},
        {name: 'type', type: 'string', title: 'Type'},
      ],
      preview: {
        select: {
          title: 'basicInfo',
        },
        prepare(selection: any) {
          const {title} = selection
          return {
            title: title.title,
          }
        },
      },
    }
  }
}
