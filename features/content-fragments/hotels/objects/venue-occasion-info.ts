import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'
import {seatingStyles} from '../utility'

export class VenueAndOccasionInfo extends Content {
  name = 'venueAndOccasionInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Venue and Occasion Info',
      name: 'venueAndOccasionInfo',
      type: 'object',
      fields: [
        {
          name: 'basicInfo',
          title: 'Basic Info',
          type: 'basicDetails',
        },
        {
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [{type: 'string'}],
        },
        {name: 'capacity', type: 'string', title: 'Capacity'},
        {
          name: 'seatingStyles',
          title: 'Seating Styles',
          type: 'array',
          of: [
            {
              name: 'style',
              type: 'string',
              title: 'Style',
              options: {
                list: seatingStyles,
              },
            },
          ],
        },
        {
          title: 'Venue Modal Details',
          name: 'venueModalDetails',
          type: 'modalDetails',
        },
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