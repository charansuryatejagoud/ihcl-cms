import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class VenuesAndOccasions extends Content {
  name = 'venuesAndOccasions'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Venues and Occasions',
      name: 'venuesAndOccasions',
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
          name: 'eventVenueDetails',
          title: 'Venue and Occasion Info',
          type: 'array',
          of: [{type: 'venueAndOccasionInfo'}],
        },
      ],
    }
  }
}
