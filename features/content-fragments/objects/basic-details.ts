import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
export class BasicDetails extends Content {
  name = 'basicDetails'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'basicDetails',
      title: 'Basic Details',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'specifications',
          title: 'Specifications',
          type: 'array',
          of: [{type: 'contentSpecification'}],
        },
        {
          title: 'Media',
          name: 'media',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'reference',
          to: [{type: 'appIcons'}],
        },
      ],
    }
  }
}
