import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class RestaurantBrand extends Content {
  name = 'restaurantBrand'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Restaurant Brands',
      name: 'restaurantBrand',
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
          name: 'thumbnailDescription',
          title: 'Thumbnail Description',
          type: 'string',
        },
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [{type: 'mediaInput'}],
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
          name: 'participatingRestaurants',
          title: 'Participating Restaurants',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'restaurants'}],
            },
          ],
        },
        {
          name: 'introSection',
          title: 'Intro Section',
          type: 'reference',
          to: [{type: 'highlights'}],
        },
        {
          name: 'locationsSection',
          title: 'Locations Section',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'title',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
        {
          name: 'otherBrandsSection',
          title: 'Other Brands Section',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'title',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
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
