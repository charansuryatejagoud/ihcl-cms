import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class LocationInfo extends Content {
  name = 'locationInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'locationInfo',
      title: 'Location Info',
      type: 'object',
      fields: [
        {
          name: 'latitude',
          title: 'Latitude',
          type: 'string',
        },
        {
          name: 'longitude',
          title: 'Longitude',
          type: 'string',
        },
      ],
    }
  }
}
