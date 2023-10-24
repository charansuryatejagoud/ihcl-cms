import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class About extends Content {
  name = 'about'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      Title: 'About',
      name: 'about',
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
          name: 'bannerImage',
          title: 'Banner',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
        {
          name: 'attractionList',
          title: 'Attraction List',
          type: 'array',
          of: [{type: 'basicDetails'}],
        },
      ],
    }
  }
}
