import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Hampers extends Content {
  name = 'hampers'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Hampers',
      name: 'hampers',
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
          name: 'type',
          title: 'Type',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'string',
        },
        {
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          rows: 3,
        },
        {
          name: 'bannerTitle',
          title: 'Banner Title',
          type: 'title',
        },
        {
          name: 'bannerImage',
          title: 'Banner',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
        {
          name: 'hamperInfo',
          title: 'Hamper Info',
          type: 'blockContent',
        },
        {
          name: 'hamperTab',
          title: 'Hamper Tab',
          type: 'tabInfo',
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
        {
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string',
        },
        {
          name: 'seoKeywords',
          title: 'SEO Keywords',
          type: 'string',
        },
        {
          name: 'seoDescription',
          title: 'SEO Description',
          type: 'text',
          rows: 5,
        },
      ],
    }
  }
}
