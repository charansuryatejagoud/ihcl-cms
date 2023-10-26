import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Restaurants extends Content {
  name = 'restaurants'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Restaurants',
      name: 'restaurants',
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
          rows: 3,
        },
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'array',
          of: [{type: 'image'}],
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
          name: 'openingHours',
          title: 'Opening Hours',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'hotelDetailDiningPage',
          title: 'Hotel Detail Dining Page',
          type: 'object',
          fields: [
            {
              name: 'bannerSubTitle',
              title: 'Banner Sub Title',
              type: 'string',
            },
            {
              name: 'bannerDiningInfo',
              title: 'Banner Dining Info',
              type: 'blockContent',
            },
            {
              name: 'restaurantInfo',
              title: 'Restaurant Details',
              type: 'restaurantDetails',
            },
            {
              name: 'restaurantAvailability',
              title: 'Restaurant Availability',
              type: 'array',
              of: [{type: 'facilityInfo'}],
            },
            {
              name: 'restaurantInformation',
              title: 'Restaurant Information',
              type: 'reference',
              to: [{type: 'availability'}],
            },
            {
              name: 'restaurantContact',
              title: 'Contact',
              type: 'reference',
              to: [{type: 'contact'}],
            },
            {
              name: 'restaurantAddress',
              title: 'Address',
              type: 'reference',
              to: [{type: 'address'}],
            },
            {
              name: 'privateDiningInfo',
              title: 'Private Dining Info',
              type: 'object',
              fields: [
                {
                  name: 'diningInfo',
                  title: 'Dining Info',
                  type: 'basicDetails',
                },
                {
                  name: 'contactInfo',
                  title: 'Contact Info',
                  type: 'blockContent',
                },
              ],
            },
            {
              name: 'locationBasedRestaurants',
              title: 'Location Based Restaurants',
              type: 'restaurantDetails',
            },
          ],
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
          name: 'restaurantDocuments',
          title: 'Restaurant Documents',
          description: 'Documents supported are PDF and DOCX.',
          type: 'array',
          of: [{type: 'fileDocument'}],
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
