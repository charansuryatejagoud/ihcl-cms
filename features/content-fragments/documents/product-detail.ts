import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class ProductDetail extends Content {
  name = 'productDetail'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Product Detail',
      name: 'productDetail',
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
