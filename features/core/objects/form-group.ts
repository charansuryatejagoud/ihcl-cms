import {AiOutlineForm as Icon} from 'react-icons/ai'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class FormGroup extends Content {
  name = 'formGroup'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'formGroup',
      title: 'Form Group',
      type: 'object',
      icon: Icon,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'id',
          title: 'Id',
          type: 'string',
        },
        {
          name: 'footer',
          title: 'Footer text',
          type: 'string',
        },
        {
          name: 'cta',
          title: 'Cta',
          type: 'navigationItem',
        },
      ],
    }
  }
}
