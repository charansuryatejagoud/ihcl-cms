import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class RoomInfo extends Content {
  name = 'roomInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'roomInfo',
      title: 'Room Info',
      type: 'object',
      fields: [
        {
          name: 'basicInfo',
          title: 'Basic Info',
          type: 'basicDetails',
        },
        {name: 'roomCode', type: 'string', title: 'Room Code'},
        {name: 'type', type: 'string', title: 'Type'},
        {
          title: 'Room Modal Details',
          name: 'roomModalDetails',
          type: 'modalDetails',
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
