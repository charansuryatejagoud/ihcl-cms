import {BiBarChartAlt} from 'react-icons/bi'
import {MdConfirmationNumber} from 'react-icons/md'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class Stepper extends Content {
  name = 'stepper'
  stepperItem = {
    name: 'stepperItem',
    title: 'Stepper Item',
    type: 'object',
    icon: MdConfirmationNumber,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'stepNo',
        title: 'Step No',
        type: 'number',
      },
      {
        name: 'id',
        title: 'Id',
        type: 'slug',
        options: {
          source: (doc: any, context: any) => context.parent.title,
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input: any) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        },
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        description: 'Static is a fixed step where as dynamic step will be managed by UI',
        options: {
          list: ['Dynamic', 'Static'],
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        type: 'type',
      },
      prepare({title, type}: any) {
        return {
          title,
          subtitle: `${type ?? ''}`,
        }
      },
    },
  }
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'stepper',
      title: 'Stepper',
      type: 'object',
      icon: BiBarChartAlt,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.stepper ?? [])],
          },
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: [...(variants?.stepper ?? [])],
          },
        },
        {
          name: 'stepperItems',
          title: 'Stepper Items',
          type: 'array',
          of: [{...this.stepperItem}],
        },
        {
          name: 'activeStep',
          title: 'Active Step',
          type: 'boolean',
          initialValue: false,
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
          media: 'image',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden, media}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          return {
            title: `${hiddenIndicator}${title ?? '<stepper>'}`,
            subtitle,
            media,
          }
        },
      },
    }
  }
}
