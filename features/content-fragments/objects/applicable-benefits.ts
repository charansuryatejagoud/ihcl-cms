import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class applicableBenefits extends Content {
  name = 'applicableBenefits'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Applicable Benefits',
      name: 'applicableBenefits',
      type: 'object',
      fields: [
        {
          title: 'Participating Hotel Name',
          name: 'partipatingHotelName',
          type: 'string',
        },
        {
          name: 'participatingHotel',
          title: 'Participating Hotel',
          type: 'reference',
          to: [{type: 'hotel'}],
        },
        {
          title: 'Membership Benefit',
          name: 'membershipBenefit',
          type: 'object',
          fields: [
            {
              title: 'Catergory Title',
              name: 'categoryTitle',
              type: 'string',
            },
            {
              title: 'Discounts on F&B',
              name: 'discountsOnFoodAndBeverage',
              type: 'columnData',
            },
            {
              title: 'Discounts on Spa',
              name: 'discountsOnSpa',
              type: 'columnData',
            },
          ],
        },
        {
          title: 'Applicability of one time use vouchers',
          name: 'applicableVouchers',
          type: 'object',
          fields: [
            {
              title: 'Catergory Title',
              name: 'categoryTitle',
              type: 'string',
            },
            {
              title: 'One Night Stay',
              name: 'oneNightStay',
              type: 'columnData',
            },
            {
              title: '60 Minute Spa Treatment',
              name: 'oneHourSpaTreatment',
              type: 'columnData',
            },
            {
              title: 'Meal for 2',
              name: 'mealForTwo',
              type: 'columnData',
            },
            {
              title: 'Celebration Cake',
              name: 'celebrationCake',
              type: 'columnData',
            },
            {
              title: '20% off Best Available Rate',
              name: 'bestAvailableRate20',
              type: 'columnData',
            },
            {
              title: '20% off Best Available Rate  @ Taj Palaces',
              name: 'bestAvailableRateTajPalaces20',
              type: 'columnData',
            },
            {
              title: '20% off Best Available Rate  @ Taj Safaris',
              name: 'bestAvailableRateTajSafaris20',
              type: 'columnData',
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'partipatingHotelName',
        },
        prepare({title}: any) {
          return {
            title: title,
          }
        },
      },
    }
  }
}
