import {Rule} from 'sanity'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {fileValidationRule} from '../../../utils/shared-utils'

export class FileDocument extends Content {
  name: string = 'fileDocument'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      type: 'object',
      name: 'fileDocument',
      title: 'File',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'fileName',
          title: 'Name of file',
          type: 'string',
        },
        {
          name: 'identifier',
          title: 'Identifier',
          type: 'string',
        },
        {
          type: 'file',
          title: 'File',
          name: 'file',
          validation: (Rule: Rule) => fileValidationRule(Rule),
        },
      ],
      preview: {
        select: {
          title: 'title',
        },
      },
    }
  }
}
