import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class DateRange extends Content {
  name = 'dateRange'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'dateRange',
      title: 'Date Range',
      type: 'object',
      fields: [
        {
          name: 'fromDate',
          title: 'From Date',
          type: 'date',
        },
        {
          name: 'toDate',
          title: 'To Date',
          type: 'date',
        },
      ],
    }
  }
}
