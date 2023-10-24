import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class videoAsset extends Content {
  name = 'videoAsset'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'videoAsset',
      title: 'Video Asset',
      type: 'object',
      fields: [
        {
          title: 'Video Play',
          name: 'videoPlay',
          type: 'file',
          options: {
            accept: 'video/mp4',
          },
        },
        {
          title: 'Play Icon',
          name: 'playIcon',
          type: 'image',
        },
        {
          title: 'Video Thumbnail',
          name: 'videoThumbnail',
          type: 'image',
          description: 'Image that will be used for larger screens like Desktop',
        },
        {
          title: 'Small Video Thumbnail',
          name: 'smallVideoThumbnail',
          type: 'image',
          description: 'Image that will be used for smaller screens like Mobile',
        },
        {
          name: 'videoUrl',
          title: 'Video Url',
          type: 'url',
        },
      ],
    }
  }
}
