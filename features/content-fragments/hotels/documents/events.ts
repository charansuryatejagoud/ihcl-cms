import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'
import {seatingStyles} from '../utility'

export class Events extends Content {
  name = 'events'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Events',
      name: 'events',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'identifier',
          title: 'Identifier',
          type: 'string',
        },
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
        {
          name: 'participatingHotels',
          title: 'Participating Hotels',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'hotel'}],
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
        },
        prepare(selection: any) {
          const {title} = selection
          return {
            title: title,
          }
        },
      },
    }
  }
}
