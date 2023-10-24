import {IoNewspaperOutline as Icon, IoColorPaletteOutline} from 'react-icons/io5'
import {pathUrlRule} from '../../../utils/shared-utils'
import {PageLink} from '../../../components/page-link/PageLink'
import {Content} from '../../../schemas/base'
import React from 'react'
import {SchemaInputProps} from '../../../schemas/types'
import {LinkTypeField} from './link-type-field'

const TitleStyle = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
}) => <span style={{fontFamily: 'Garamond', fontSize: '2em'}}>{props.children} </span>

export class BlockContent extends Content {
  name: string = 'blockContent'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Block Content',
      name: 'blockContent',
      type: 'array',
      icon: Icon,
      of: [
        {
          title: 'Block',
          type: 'block',
          // Styles let you set what your user can mark up blocks with. These
          // correspond with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
            {title: 'Section', value: 'section'},
            {title: 'Span', value: 'span'},
            {title: 'Break', value: 'break'},
            {title: 'Html', value: 'html'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Strike Through', value: 'strike-through'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Left Aligned', value: 'left-aligned'},
              {title: 'Right Aligned', value: 'right-aligned'},
              {title: 'Centered Aligned', value: 'centered-aligned'},
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  new LinkTypeField({name: 'type', title: 'type'}).getSchema(),
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: pathUrlRule,
                    inputComponent: PageLink('type'),
                  },
                ],
              },
              {
                name: 'color',
                title: 'Color',
                type: 'color',
                blockEditor: {
                  icon: IoColorPaletteOutline,
                },
              },

              {
                name: 'placeholderText',
                title: 'Placeholder Text',
                type: 'object',
                fields: [
                  {
                    title: 'Key',
                    name: 'key',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
          type: 'image',
        },
        {
          type: 'nudge',
        },
        {
          type: 'group',
        },
        {
          type: 'navigationItem',
        },
        {
          type: 'code',
        },
      ],
    }
  }
}
