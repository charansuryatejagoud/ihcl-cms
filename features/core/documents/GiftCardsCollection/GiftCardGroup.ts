import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class GiftCardGroup extends Content {
  name: string = 'giftCardGroup'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Gift Cards Group',
      type: 'document',
      name: 'giftCardGroup',
      fields: [
        {
          title: 'Name',
          type: 'string',
          name: 'name',
        },
        {
          title: 'Description',
          type: 'string',
          name: 'description',
        },
        {
          title: 'URL',
          type: 'string',
          name: 'url',
        },
      ],
    }
  }
}
