import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class Attractions extends Content {
  name = 'attractions'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Attractions',
      name: 'attractions',
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
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'bannerImage',
          title: 'Banner',
          type: 'array',
          of: [{type: 'mediaInput'}],
        },
        {
          name: 'attractionDetails',
          title: 'AttractionDetails',
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
        {
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string',
        },
        {
          name: 'seoKeywords',
          title: 'SEO Keywords',
          type: 'string',
        },
        {
          name: 'seoDescription',
          title: 'SEO Description',
          type: 'text',
          rows: 5,
        },
      ],
    }
  }
}
