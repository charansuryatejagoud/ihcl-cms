import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class Awards extends Content {
  name = 'awards'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Awards',
      name: 'awards',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'title',
        },
        {
          name: 'awardDetails',
          title: 'Award Details',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'basicInfo',
                  title: 'Basic Info',
                  type: 'basicDetails',
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
            },
          ],
        },
      ],
    }
  }
}
