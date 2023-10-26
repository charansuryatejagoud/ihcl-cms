import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class ExclusiveOffers extends Content {
  name = 'exclusiveOffers'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Exclusive Offers',
      name: 'exclusiveOffers',
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
          name: 'exclusiveOfferDetails',
          title: 'Exclusive Offer Details',
          type: 'array',
          of: [{type: 'exclusiveOfferInfo'}],
        },
      ],
    }
  }
}
