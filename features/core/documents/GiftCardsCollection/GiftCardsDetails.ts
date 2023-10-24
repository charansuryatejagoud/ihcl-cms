import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class GiftCardsDetails extends Content {
  name: string = 'GiftCardsDetails'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Gift Cards',
      type: 'document',
      name: 'giftCardsDetails',
      initialValue: {
        isPhysicalGIftCard: false,
        isSeasonal: false,
      },
      fields: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{type: 'giftCardGroup'}],
        },
        {
          title: 'SKU',
          type: 'string',
          name: 'sku',
        },
        {
          name: 'identifier',
          title: 'Identifier',
          type: 'string',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'title',
        },
        {
          title: 'Name',
          type: 'string',
          name: 'name',
        },
        {
          name: 'heroSubtitle',
          title: 'Hero Subtitle',
          type: 'string',
        },
        {
          title: 'Description',
          type: 'string',
          name: 'description',
        },
        {
          title: 'Is Physical GIft Card',
          type: 'boolean',
          name: 'isPhysicalGIftCard',
          initialValue: false,
        },
        {
          title: 'Catalog Image',
          type: 'image',
          name: 'catalogImage',
          description: 'This Image will render in the Grid Format in the E-Gift Card LP',
        },
        {
          title: 'Priority Order',
          type: 'number',
          name: 'priorityOrder',
          description: 'E-Gift Cards will be displayed based on this Priority Number',
        },
        {
          title: 'Is Seasonal',
          type: 'boolean',
          name: 'isSeasonal',
        },
        {
          title: 'Font Color',
          name: 'fontColor',
          type: 'color',
          description: 'Field Used for Gift Card Preview Title and Description Font Colors',
        },
        {
          name: 'eGiftCardSubtitle',
          title: 'E-Gift Card Subtitle',
          type: 'string',
          description: 'Will Display Below The E-Gift Card Title',
        },
        {
          title: 'Front Cover',
          name: 'frontCover',
          type: 'images',
          hidden: ({parent}: any) =>
            parent?.category?._ref !== '06a84b5f-4ef6-42f7-a253-39ed5830d3d6',
        },
        {
          title: 'Banner Image',
          type: 'images',
          name: 'bannerImage',
        },
        {
          title: 'Card Preview',
          type: 'object',
          name: 'cardPreview',
          fields: [
            {
              title: 'Front Image',
              type: 'images',
              name: 'frontImage',
            },
            {
              title: 'Back Image',
              type: 'images',
              name: 'backImage',
            },
          ],
        },
        {
          title: 'Base',
          type: 'images',
          name: 'base',
          description: 'This is used in Purchase Confirmation Page',
        },
        {
          title: 'Currency',
          type: 'object',
          name: 'currency',
          fields: [
            {title: 'Code', type: 'string', name: 'code'},
            {title: 'Numeric Code', type: 'string', name: 'numericCode'},
            {title: 'Symbol', type: 'string', name: 'symbol'},
          ],
        },
        {
          title: 'URL',
          type: 'string',
          name: 'url',
        },
        {
          title: 'Minimum Price',
          type: 'string',
          name: 'minPrice',
        },
        {
          title: 'Maximum Price',
          type: 'string',
          name: 'maxPrice',
        },
        {
          title: 'Gift Card Quantity',
          name: 'giftCardQuantity',
          type: 'number',
        },
        {
          title: 'Price',
          type: 'object',
          name: 'price',
          fields: [
            {
              title: 'cpg',
              type: 'array',
              name: 'cpg',
              of: [{title: 'cpgID', type: 'string', name: 'cpgId'}],
            },
          ],
        },
        {
          name: 'isLive',
          type: 'boolean',
          description: 'Will Display this Gift Card Only When Set True',
        },
      ],
    }
  }
}
