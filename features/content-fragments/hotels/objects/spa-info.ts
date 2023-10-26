import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class SpaInfo extends Content {
  name = 'spaInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Spa Info',
      name: 'spaInfo',
      type: 'object',
      fields: [
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
          name: 'basicInfo',
          title: 'Spa Info',
          type: 'basicDetails',
        },
      ],
    }
  }
}
