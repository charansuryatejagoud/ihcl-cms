import {Content} from '../../schemas/base'
import {SchemaInputProps} from '../../schemas/types'

export class WeddingMedia extends Content {
  name = 'weddingMedia'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'weddingMedia',
      title: 'Wedding Media',
      type: 'object',
      initialValue: {textOnly: false},
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'textOnly',
          title: 'Text Only',
          type: 'boolean',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'title',
          hidden: ({parent}: any) => !parent?.textOnly
        },
        {
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              {title: 'Video', value: 'video'},
              {title: 'Component', value: 'component'},
              {title: 'Image', value: 'image'},
            ],
          },
        },
        {
          name: 'videoAsset',
          title: 'Video',
          type: 'videoAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'video' && parent?.largeVariant !== 'video',
        },
        {
          name: 'imageAsset',
          title: 'Image',
          type: 'imageAsset',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'image' && parent?.largeVariant !== 'image',
        },
        {
          title: 'Components',
          name: 'components',
          type: 'component',
          hidden: ({parent}: any) =>
            parent?.mediaType !== 'component' && parent?.largeVariant !== 'component',
        },
      ],
    }
  }
}
