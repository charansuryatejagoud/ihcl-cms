import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class WeddingEventInfo extends Content {
  name = 'weddingEventInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Wedding Event Details',
      name: 'weddingEventInfo',
      type: 'object',
      fields: [
        {
          name: 'basicInfo',
          title: 'Basic Info',
          type: 'basicDetails',
        },
        {
          name: 'backgroundImage',
          title: 'Backgorund Image',
          type: 'imageAsset',
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
    }
  }
}
