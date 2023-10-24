import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class Facilities extends Content {
  name = 'facilities'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Facilities',
      name: 'facilities',
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
          name: 'facilityDetails',
          title: 'Facility  Details',
          type: 'array',
          of: [{type: 'facilityInfo'}],
        },
        {
          name: 'mobileFacilities',
          title: 'Mobile Facilities',
          type: 'array',
          of: [{type: 'contentSpecification'}],
        },
      ],
    }
  }
}
