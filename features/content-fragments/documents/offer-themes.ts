import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class OfferThemes extends Content {
  name = 'offerThemes'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'offerThemes',
      title: 'Offer Themes',
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
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
      ],
    }
  }
}
