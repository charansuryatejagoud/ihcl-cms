import {
  IoApps,
  IoSettings,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {hiddenField} from '../../../utils/shared-utils'

export class Placeholder extends Content {
  name: string = 'placeholder'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {...hiddenField, group: 'main'},
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          group: 'main',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          group: 'main',
        },
        {
          name: 'charactersLimit',
          title: 'Characters Limit',
          type: 'number',
          group: 'main',
          Description: 'Number of characters limit for placeholder description.',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
        {
          title: 'Content',
          name: 'singleContent',
          type: 'blockContent',
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [...(variants?.placeholder ?? [])],
          },
          group: 'main',
        },
        {
          name: 'brandId',
          title: 'Brand Id',
          type: 'string',
          hidden: ({parent}: any) => parent?.variant !== 'common-utils.placeholders.social-feed',
        },
        {
          name: 'socialHandle',
          title: 'Social Handle',
          type: 'string',
          hidden: ({parent}: any) => parent?.variant !== 'common-utils.placeholders.social-feed',
        },
        {
          title: 'Start Date',
          name: 'startDate',
          type: 'datetime',
          options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            calendarTodayLabel: 'Today',
          },
          description: 'Used for Showing Social Feeds based on Time Period',
          hidden: ({parent}: any) => parent?.variant !== 'common-utils.placeholders.social-feed',
        },
        {
          title: 'End Date',
          name: 'endDate',
          type: 'datetime',
          options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            calendarTodayLabel: 'Today',
          },
          description: 'Used for Showing Social Feeds based on Time Period',
          hidden: ({parent}: any) => parent?.variant !== 'common-utils.placeholders.social-feed',
        },
        {
          name: 'documents',
          title: 'Documents',
          description: 'Documents supported are PDF and DOCX.',
          type: 'array',
          of: [
            {
              type: 'fileDocument',
            },
          ],
          group: 'main',
        },
        {
          name: 'parameterMap',
          title: 'Parameter Map',
          description: 'Parameters as a set of key-value pairs',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Parameter',
              icon: ParameterMapIcon,
              options: {columns: 2},
              fields: [
                {
                  name: 'key',
                  title: 'Key',
                  type: 'string',
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
              ],
              preview: {
                select: {
                  title: 'key',
                  subtitle: 'value',
                },
              },
            },
          ],
          group: 'main',
        },
        {
          name: 'primaryAction',
          title: 'Primary Action',
          type: 'navigationItem',
        },
        {
          name: 'secondaryAction',
          title: 'Secondary Action',
          type: 'navigationItem',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'subtitle',
          variant: 'variant',
          hidden: 'isHidden',
        },
        prepare({title, subtitle, variant, hidden}: any) {
          const hiddenIndicator = hidden ? '🚫 ' : ''
          const variantText = variant ? `(${variant})` : ''

          return {
            title: `${hiddenIndicator}${title ?? '<Placeholder>'}`,
            subtitle: `${subtitle ?? ''}${variantText}`,
          }
        },
      },
    }
  }
}
