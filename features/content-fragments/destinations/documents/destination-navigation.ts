import {destinationNavigation} from '../../../../utils/constants'
import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'
import {getNavItems} from '../../../../utils/shared-utils'

export class DestinationNavigation extends Content {
  name = 'destinationNavigation'
  navItems: any = []
  constructor() {
    super()
    this.navItems = getNavItems(destinationNavigation)
  }
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Destination Navigation',
      name: 'destinationNavigation',
      type: 'document',
      fields: [
        {
          name: 'navType',
          title: 'Nav Type',
          type: 'string',
          initialValue: 'Destination Default',
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
