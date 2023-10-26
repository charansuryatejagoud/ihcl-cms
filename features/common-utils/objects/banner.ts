import {GiVerticalBanner} from 'react-icons/gi'
import {IoApps, IoSettings} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {contentTypes} from '../../../utils/constants'

const AlignmentVariant = [
  {
    title: 'Normal',
    value: 'normal',
  },
  {
    title: 'Center',
    value: 'center',
  },
  {
    title: 'No Preceding Hyphen for Mobile',
    value: 'no-preceding-hyphen-for-mobile',
  },
]
const bannerVariants = [
  {
    title: 'Hero Banner',
    value: 'hero-banner',
  },
  {
    title: 'Banner With Action',
    value: 'banner-with-action',
  },
  {
    title: 'Gift Card Personalize Banner',
    value: 'gift-card-personalize-banner',
  },
  {
    title: 'Page Not Found',
    value: 'page-not-found',
  },
  {
    title: 'Hero Banner (Layout Placeholder)',
    value: 'hero-banner-layout-placeholder',
  },
  {
    title: 'Image Hider',
    value: 'image-hider',
  },
  {
    title: 'Fullscreen Banner Image Width',
    value: 'fullscreen-banner-image-width',
  },
]

export class Banner extends Content {
  name = 'banner'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Banner',
      name: 'banner',
      type: 'object',
      icon: GiVerticalBanner,
      initialValue: {
        mediaType: 'image',
      },
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'title',
          group: 'main',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
          group: 'main',
        },
        {
          title: 'Content',
          name: 'singleContent',
          type: 'blockContent',
          group: 'main',
        },
        {
          name: 'alignmentVariant',
          title: 'Alignment Variant',
          type: 'string',
          description: 'This variant is for Title alignment',
          options: {
            list: AlignmentVariant,
          },
          group: 'main',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
        {
          name: 'chatBotImage',
          title: 'Chat Bot Image',
          type: 'image',
          group: 'main',
        },
        {
          name: 'doesBannerContainsFeaturedLogo',
          title: 'Does Banner Contains Featured Logo',
          type: 'boolean',
        },
        {
          name: 'shortImage',
          title: 'Short Image',
          type: 'image',
          hidden: ({parent}: any) => !parent?.doesBannerContainsFeaturedLogo,
        },
        {
          name: 'largeImage',
          title: 'Large Image',
          type: 'image',
          hidden: ({parent}: any) => !parent?.doesBannerContainsFeaturedLogo,
        },
        {
          title: 'Variant',
          name: 'variant',
          type: 'string',
          options: {
            list: bannerVariants,
          },
          group: 'main',
        },
        {
          title: 'Large Variant',
          name: 'largeVariant',
          type: 'string',
          options: {
            list: bannerVariants,
          },
          group: 'main',
        },
        {
          name: 'contentType',
          title: 'Content Type',
          type: 'string',
          options: {
            list: contentTypes,
          },
          group: 'main',
        },
        {
          title: 'Search Field Variant',
          name: 'searchFieldVariant',
          type: 'string',
          options: {
            list: [
              {
                title: 'Global Search Field',
                value: 'ihcl.banner.global-search-field',
              },
              {
                title: 'Global Booking Mask',
                value: 'ihcl.banner.global-booking-mask',
              },
              {
                title: 'Global Booking Mask With Prices',
                value: 'ihcl.banner.global-booking-mask-with-prices',
              },
            ],
          },
          group: 'main',
        },
        {
          name: 'placeholderText',
          title: 'Placeholder Text',
          type: 'string',
          description: 'Placeholder Text for the Search Field',
          hidden: ({parent}: any) =>
            parent?.searchFieldVariant !== 'ihcl.banner.global-search-field',
        },
        {
          name: 'searchData',
          type: 'reference',
          to: [{type: 'searchConfig'}],
          hidden: ({parent}: any) =>
            parent?.searchFieldVariant !== 'ihcl.banner.global-search-field',
        },
        {
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          group: 'main',
          options: {
            list: [
              {title: 'Video', value: 'video'},
              {title: 'Image', value: 'image'},
              {title: 'Component', value: 'component'},
            ],
          },
        },
        {
          name: 'imageAsset',
          title: 'Image',
          type: 'imageAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'image' && parent?.largeVariant !== 'image',
        },
        {
          name: 'videoAsset',
          title: 'Video',
          type: 'videoAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'video' && parent?.largeVariant !== 'video',
        },
        {
          title: 'Components',
          name: 'components',
          type: 'component',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'component' && parent?.largeVariant !== 'component',
        },
        {
          name: 'primaryAction',
          title: 'Primary Action',
          type: 'navigationItem',
        },
      ],
      preview: {
        select: {
          title: 'title.desktopTitle',
          subtitle: 'description',
          media: 'image',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden, media}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''

          return {
            title: `${hiddenIndicator}${title ?? '<banner>'}`,
            subtitle,
            media,
          }
        },
      },
    }
  }
}

export class BannerComponents extends Content {
  name = 'component'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'component',
      title: 'Component',
      type: 'object',
      fields: [
        {
          title: 'Items',
          name: 'items',
          type: 'array',
          of: [...(items?.pageItems ?? [])],
        },
      ],
    }
  }
}