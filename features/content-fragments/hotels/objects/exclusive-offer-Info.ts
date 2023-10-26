import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class ExclusiveOfferInfo extends Content {
  name = 'exclusiveOfferInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'exclusiveOfferInfo',
      title: 'Exclusive Offer Info',
      type: 'object',
      fields: [
        {
          name: 'basicInfo',
          title: 'Basic Info',
          type: 'basicDetails',
        },
        {
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [{type: 'string'}],
        },
        {name: 'code', type: 'string', title: 'Code'},
        {name: 'type', type: 'string', title: 'Type'},
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
    }
  }
}
