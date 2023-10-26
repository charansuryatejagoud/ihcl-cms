import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class MediaInput extends Content {
  name = 'mediaInput'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'mediaInput',
      title: 'Media',
      type: 'object',
      fields: [
        {
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              {title: 'Image', value: 'image'},
              {title: 'Video', value: 'video'},
              {title: 'Component', value: 'component'},
            ],
          },
        },
        {
          name: 'imageAsset',
          title: 'Image',
          type: 'imageAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'image' && parent?.largeVariant !== 'image',
        },
        {
          name: 'videoAsset',
          title: 'Video',
          type: 'videoAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'video' && parent?.largeVariant !== 'video',
        },
      ],
      preview: {
        select: {
          image: 'imageAsset',
          title: 'mediaType',
          videoAsset: 'videoAsset',
        },
        prepare(selection: any) {
          const {image, title, videoAsset} = selection
          return {
            title: title,
            media: image
              ? image.largeImage[0].asset || image.image[0].asset
              : videoAsset
              ? videoAsset.videoThumbnail.asset
              : {},
          }
        },
      },
    }
  }
}
