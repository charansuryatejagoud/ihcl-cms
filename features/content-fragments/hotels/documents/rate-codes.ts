import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class RateCodes extends Content {
  name = 'rateCodes'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'rateCodes',
      title: 'Rate Codes',
      type: 'document',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'rateCode', type: 'string', title: 'Rate Code'},
        {name: 'type', type: 'string', title: 'Type'},
        {name: 'subTitle', type: 'string', title: 'Sub Title'},
        {name: 'description', type: 'string', title: 'Description'},
        {
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
        },
      ],
    }
  }
}
