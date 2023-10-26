import {hotelNavigation} from '../../../../utils/constants'
import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'
import {getNavItems} from '../../../../utils/shared-utils'

export class HotelNavigation extends Content {
  name = 'hotelNavigation'
  navItems: any = []
  constructor() {
    super()
    this.navItems = getNavItems(hotelNavigation)
  }
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Hotel Navigation',
      name: 'hotelNavigation',
      type: 'document',
      fields: [
        {
          name: 'navType',
          title: 'Nav Type',
          type: 'string',
          initialValue: 'Hotel Default',
        },
        ...this.navItems,
      ],
      preview: {
        select: {
          title: 'navType',
        },
        prepare({title}: any) {
          return {
            title,
          }
        },
      },
    }
  }
}
