import {Content} from '../../../schemas/base'
import {LinkTypeFieldProps, SchemaInputProps} from '../../../schemas/types'

export class LinkTypeField extends Content {
  name = 'urlType'
  title = 'Url Type'
  linkType = {
    internal: 'internal',
    external: 'external',
    dialog: 'dialog',
    externalApplication: 'externalApplication',
  }
  constructor({name, title}: LinkTypeFieldProps) {
    super()
    this.name = name ?? 'urlType'
    this.title = title ?? 'Url Type'
  }

  getSchema({variants, items}: SchemaInputProps = {}) {
    return {
      name: this.name,
      title: this.title,
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: this.linkType.internal},
          {title: 'External', value: this.linkType.external},
          {title: 'Dialog', value: this.linkType.dialog},
          {title: 'External Application', value: this.linkType.externalApplication},
        ],
        layout: 'radio',
      },
    }
  }
}
