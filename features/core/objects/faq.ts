import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'
import {BsFillQuestionCircleFill as faqIcon} from 'react-icons/bs'

export class Faq extends Content {
  name: string = 'faqs'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'faqs',
      title: "FAQ'S (Question/Answer)",
      type: 'object',
      icon: faqIcon,
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'aesthetic',
          title: 'Aesthetic',
          type: 'reference',
          to: [{type: 'uiConfiguration'}],
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
        },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  title: 'Question',
                  name: 'question',
                  type: 'string',
                },
                {
                  title: 'Answer',
                  name: 'answer',
                  type: 'blockContent',
                },
              ],
            },
            {
              type: 'group',
            },
            {
              type: 'object',
              name: 'questionAndAnswer',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  type: 'array',
                  name: 'items',
                  of: [{type: 'questionAndAnswer'}],
                },
              ],
            },
          ],
        },
        {
          name: 'primaryAction',
          title: 'Primary Action',
          type: 'navigationItem',
        },
      ],
      preview: {
        select: {
          title: 'title',
          items: 'items',
        },
        prepare({title, items}: any) {
          const customSubtitle = items ? `${items.length} Questions` : '0 Questions'
          return {
            title,
            subtitle: customSubtitle,
          }
        },
      },
    }
  }
}

export class QuestionAndAnswer extends Content {
  name: string = 'questionAndAnswer'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'questionAndAnswer',
      title: 'Question and Answer',
      type: 'object',
      fields: [
        {
          title: 'Question',
          name: 'question',
          type: 'string',
        },
        {
          title: 'Answer',
          name: 'answer',
          type: 'blockContent',
        },
      ],
    }
  }
}