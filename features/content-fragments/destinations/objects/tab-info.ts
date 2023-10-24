import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class TabInfo extends Content {
  name = 'tabInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      Title: 'Tab Info',
      name: 'tabInfo',
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
          name: 'bannerImage',
          title: 'Banner',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
      ],
    }
  }
}
