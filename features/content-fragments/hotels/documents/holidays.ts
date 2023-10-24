import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class Holidays extends Content {
  name = 'holidays'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Holidays',
      name: 'holidays',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'title',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'holidayDetails',
          title: 'Holiday Details',
          type: 'array',
          of: [{type: 'holidayInfo'}],
        },
      ],
    }
  }
}
