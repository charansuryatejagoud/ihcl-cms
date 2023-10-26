import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'

export class Treatments extends Content {
  name = 'treatments'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Treatments',
      name: 'treatments',
      type: 'object',
      fields: [
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
          name: 'signatureTreatmentDetails',
          title: 'Signature Treatment Info',
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
