import {offerTypes, cugTypes} from '../../../utils/constants'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class OfferPackages extends Content {
  name = 'offerPackages'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Offer Packages',
      name: 'offerPackages',
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
          name: 'rateCode',
          title: 'Rate Code',
          type: 'string',
        },
        {
          name: 'promoCode',
          title: 'Promo Code',
          type: 'string',
        },
        {
          name: 'offerType',
          title: 'Offer Type',
          type: 'string',
          options: {list: offerTypes},
        },
        {
          name: 'cugType',
          title: 'CUG Type',
          type: 'string',
          options: {list: cugTypes},
          hidden: ({document}: any) => document?.offerType != 'cug',
        },
        {
          name: 'themeInfo',
          title: 'Theme Info',
          type: 'tabInfo',
        },
        {
          name: 'holidayOffer',
          title: 'Holiday Offer',
          type: 'boolean',
        },
        {
          name: 'memberSpecific',
          title: 'Is Member Specific',
          type: 'boolean',
        },
        {
          name: 'offerBannerTitle',
          title: 'Offer Banner Title',
          type: 'title',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
        {
          name: 'banner',
          title: 'Banner',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
        {
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'array',
          of: [{type: 'mediaInput'}],
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
          name: 'packageType',
          title: 'Package Type',
          type: 'string',
          options: {
            list: [
              {title: 'Single Package', value: 'singlePackage'},
              {title: 'Multiple Packages', value: 'multiplePackages'},
              {
                title: 'Multiple Themes and Packages',
                value: 'multipleThemesAndPackages',
              },
            ],
          },
        },
        {
          name: 'inclusions',
          title: 'Inclusions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'basicInfo',
                  title: 'Basic Info',
                  type: 'basicDetails',
                },
                {
                  name: 'inclusionTitle',
                  title: 'Inclusion Title',
                  type: 'string',
                  initialValue: 'PACKAGE INCLUSIONS',
                  hidden: ({document}: any) => document?.packageType == 'singlePackage',
                },
                {
                  name: 'inclusionIdentifier',
                  title: 'Inclusion Identifier',
                  type: 'string',
                  initialValue: '',
                  hidden: ({document}: any) => document?.packageType == 'singlePackage',
                },
                {
                  name: 'highlights',
                  title: 'Highlights',
                  type: 'array',
                  of: [{type: 'string'}],
                  hidden: ({document}: any) => document?.packageType == 'singlePackage',
                },
                {
                  name: 'inclusionTheme',
                  title: 'Inclusion Theme',
                  type: 'reference',
                  to: [{type: 'offerThemes'}],
                  hidden: ({document}: any) =>
                    document?.packageType !== 'multipleThemesAndPackages',
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
            },
          ],
        },
        {
          name: 'validThroughYear',
          title: 'Valid till round the year?',
          type: 'boolean',
        },
        {
          name: 'validityDates',
          title: 'Validity Dates',
          type: 'array',
          of: [{type: 'dateRange'}],
        },
        {
          name: 'stayDates',
          title: 'Stay Dates',
          type: 'array',
          of: [{type: 'dateRange'}],
        },
        {
          name: 'blackoutDates',
          title: 'Blackout Dates',
          type: 'array',
          of: [{type: 'dateRange'}],
        },
        {
          name: 'hotels',
          title: 'Package Inclusions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
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
                  name: 'sectionTitle',
                  title: 'Section Title',
                  type: 'title',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  rows: 4,
                },
                {
                  name: 'banner',
                  title: 'Banner',
                  type: 'array',
                  of: [{type: 'mediaInput'}],
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
                  rows: 4,
                },
                {
                  name: 'validThroughYear',
                  title: 'Valid till round the year?',
                  type: 'boolean',
                },
                {
                  name: 'validityDates',
                  title: 'Validity Dates',
                  type: 'array',
                  of: [{type: 'dateRange'}],
                },
                {
                  name: 'stayDates',
                  title: 'Stay Dates',
                  type: 'array',
                  of: [{type: 'dateRange'}],
                },
                {
                  name: 'blackoutDates',
                  title: 'Blackout Dates',
                  type: 'array',
                  of: [{type: 'dateRange'}],
                },
                {
                  name: 'inclusions',
                  title: 'Inclusions',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'basicInfo',
                          title: 'Basic Info',
                          type: 'basicDetails',
                        },
                        {
                          name: 'inclusionTitle',
                          title: 'Inclusion Title',
                          type: 'string',
                          initialValue: 'PACKAGE INCLUSIONS',
                          hidden: ({document}: any) => document?.packageType == 'singlePackage',
                        },
                        {
                          name: 'inclusionIdentifier',
                          title: 'Inclusion Identifier',
                          type: 'string',
                          initialValue: '',
                          hidden: ({document}: any) => document?.packageType == 'singlePackage',
                        },
                        {
                          name: 'highlights',
                          title: 'Highlights',
                          type: 'array',
                          of: [{type: 'string'}],
                          hidden: ({document}: any) => document?.packageType == 'singlePackage',
                        },
                        {
                          name: 'inclusionTheme',
                          title: 'Inclusion Theme',
                          type: 'reference',
                          to: [{type: 'offerThemes'}],
                          hidden: ({document}: any) =>
                            document?.packageType !== 'multipleThemesAndPackages',
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
                    },
                  ],
                },
                {
                  name: 'tnc',
                  title: 'TNC',
                  type: 'blockContent',
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
              preview: {
                select: {
                  title: 'sectionTitle',
                  hotelTitle: 'participatingHotels.0.hotelName',
                  multipleHotels: 'participatingHotels.1.hotelName',
                },
                prepare(selection: any) {
                  const {title, hotelTitle, multipleHotels} = selection
                  return {
                    title: !multipleHotels ? hotelTitle : title.desktopTitle[0],
                  }
                },
              },
            },
          ],
        },
        {
          name: 'tnc',
          title: 'TNC',
          type: 'blockContent',
        },
        {
          name: 'offerFAQs',
          title: 'Offer FAQs',
          type: 'object',
          fields: [
            {
              name: 'items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      title: 'Question',
                      name: 'question',
                      type: 'string',
                    },
                    {
                      title: 'Answer',
                      name: 'answer',
                      type: 'blockContent',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'participatingDestinations',
          title: 'Participating Destinations',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'destination'}],
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