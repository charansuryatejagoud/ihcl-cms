import {
  IoApps,
  IoCheckmarkCircle as CaseItemIcon,
  IoLayers as Icon,
  IoSettings,
} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps, SchemaItem, VariantDefinition} from '../../../schemas/types'
import {hiddenField} from '../../../utils/shared-utils'
import {Rule} from 'sanity'

export const featureFlagVariant: VariantDefinition = {
  title: 'Feature Flag based',
  value: 'core.switchCase.featureFlag',
}

export class SwitchCaseBlock extends Content {
  name: string = 'switchCaseBlock'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'switchCaseBlock',
      title: 'Switch-Case Block',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          ...hiddenField,
          group: 'configuration',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          description: 'This decides the runtime logic that fetches the value for switch-case',
          type: 'string',
          options: {
            list: [...(variants?.switchCaseBlock ?? [])],
          },
          group: 'main',
        },
        {
          title: 'Feature Flag',
          name: 'featureFlag',
          description: 'Name of feature flag defined in Launch Darkly',
          type: 'string',
          hidden: ({parent}: any) => parent?.variant !== featureFlagVariant.value,
        },
        {
          title: 'Content Id',
          name: 'contentId',
          description: 'Content Id of the variant on which switch case is dependent if applicable',
          type: 'string',
        },
        {
          name: 'defaultCase',
          title: 'Default Case value',
          type: 'string',
          validation: (Rule: Rule) =>
            Rule.custom((value, {parent}: any) => {
              const {cases} = parent
              if (!value) {
                return true
              }

              const values = cases.map((x: {value: any}) => x.value)
              return values.includes(value)
                ? true
                : 'The value does not match any of the given case values.'
            }),
          group: 'main',
        },
        {
          name: 'cases',
          title: 'Cases',
          type: 'array',
          of: [this.caseItem({items: items?.pageItems ?? []})],
          validation: (Rule: Rule) =>
            Rule.required()
              .min(2)
              .custom((cases: any[], context: any) => {
                const values = cases.map((x: {value: any}) => x.value)

                // Create a set to pick the unique values
                const set = new Set(values)

                // Unique-ness is guaranteed when count of set values equals the cases
                return set.size === values.length
                  ? true
                  : 'Duplicate case value present. They must be unique.'
              }),
          group: 'main',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'variant',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, hidden}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          return {
            title: `${hiddenIndicator}${title ?? '<Switch-Case Block>'}`,
            subtitle,
          }
        },
      },
    }
  }

  caseItem({items}: {items: SchemaItem[]}) {
    return {
      title: 'Switch-Case Item',
      type: 'object',
      icon: CaseItemIcon,
      fields: [
        {
          name: 'value',
          title: 'Case value',
          description: 'A unique value for this case',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'item',
          title: 'Item',
          type: 'array',
          of: items,
          validation: (Rule: Rule) => Rule.required().length(1),
        },
      ],
      preview: {
        select: {
          title: 'value',
        },
      },
    }
  }
}
