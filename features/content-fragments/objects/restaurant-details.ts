import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class RestaurantDetails extends Content {
  name = 'restaurantDetails'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Restaurant Details',
      name: 'restaurantDetails',
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
          title: 'Basic Info',
          type: 'basicDetails',
        },
      ],
    }
  }
}
