import {Rule} from 'sanity'
import {iconTypes} from '../../../utils/constants'
import {client} from '../../../plugins/read-excel/client'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class AppIcons extends Content {
  name = 'appIcons'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'App Icons',
      name: 'appIcons',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'key',
          title: 'Key',
          type: 'string',
          validation: (Rule: Rule) =>
            Rule.required().custom(async (key, {document}: any) => {
              const documentId = document._id.replace('drafts.', '')

              // Finds a icon which has the currently specified icon, excluding the current icon
              const appIcons = await client.fetch(
                `*[_type == "appIcons" && key == "${key}" && !(_id match "*${documentId}")]{_id}[0]`
              )
              const iconExists = !!appIcons

              // Returns an error message if page exists, else the validation is true
              return iconExists ? 'This icon is already in use.' : true
            }),
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'iconType',
          title: 'Icon Type',
          type: 'string',
          options: {list: iconTypes},
        },
      ],
    }
  }
}