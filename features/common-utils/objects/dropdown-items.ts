import { AiOutlineForm as Icon } from "react-icons/ai";
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class DropDownItems extends Content {
  name = 'dropDownItems'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'dropDownItems',
      title: 'Drop Down Items',
      type: 'object',
      icon: Icon,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'cta',
          title: 'Cta',
          type: 'array',
          of: [
            {
              type: 'navigationItem',
            },
          ],
        },
      ],
    }
  }
}
