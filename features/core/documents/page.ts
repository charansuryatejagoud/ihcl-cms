import {IoDocumentText as Icon, IoApps, IoSearch, IoSettings} from 'react-icons/io5'
import {Content} from '../../../schemas/base'
import {LockFieldEditor} from '../../../components/LockFieldEditor'
import {getSanityClient, isAdminUser} from '../../../utils/shared-utils'
import {headerBGVariant} from '../../../utils/constants'
import {SchemaInputProps} from '../../../schemas/types'
import {Rule} from 'sanity'

export class Page extends Content {
  name = 'page'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Page',
      name: 'page',
      type: 'document',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'seo', title: 'SEO', icon: IoSearch},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      initialValue: {
        variant: 'page',
        itemsRepresentation: 'list',
        headerBGVariant: 'default',
        showBottomNavigation: false,
        isLocked: false,
        tabItemSize: 'dynamic',
        pageHeaderVariant: 'defaultHeader',
      },
      fields: [
        {
          title: 'Lock',
          description: 'This document can be locked or unlocked by an Administrator only.',
          name: 'isLocked',
          type: 'boolean',
          components: {input: LockFieldEditor},
          readOnly: ({currentUser}: any) => !isAdminUser(currentUser),
          group: 'main',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
          group: 'main',
        },
        {
          name: 'path',
          title: 'Path',
          description: 'A unique path to identify this page',
          type: 'string',
          validation: (Rule: any) =>
            Rule.required().custom(async (path: any, {document}: any) => {
              const documentId = document._id.replace('drafts.', '')

              // Finds a page which has the currently specified path, excluding the current page
              const page = await getSanityClient('production').fetch(
                `*[_type == "page" && path == "${path}" && !(_id match "*${documentId}")]{_id}[0]`
              )
              const pageExists = !!page

              // Returns an error message if page exists, else the validation is true
              return pageExists ? 'This path is already in use.' : true
            }),
          group: 'main',
        },
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{type: 'category'}],
          group: 'main',
        },
        {
          name: 'itemsRepresentation',
          title: 'Items Representation',
          type: 'string',
          options: {
            list: [
              {title: 'Vertical List', value: 'list'},
              {title: 'Tabs', value: 'tabs'},
              {title: 'Single Item', value: 'single'},
            ],
          },
          group: 'main',
        },
        {
          name: 'tabItemSize',
          title: 'Tab Item Size',
          type: 'string',
          hidden: ({parent}: any) => parent?.itemsRepresentation != 'tabs',
          options: {
            list: [
              {title: 'Fixed', value: 'fixed'},
              {title: 'Dynamic', value: 'dynamic'},
            ],
          },
          group: 'main',
        },
        {
          name: 'pageHeaderVariant',
          title: 'Page Header Variant',
          type: 'string',
          options: {
            list: [
              {title: 'Default Header', value: 'defaultHeader'},
              {title: 'Booking Mask Header', value: 'bookingMaskHeader'},
            ],
          },
        },
        {
          name: 'variant',
          title: 'Variant',
          description: 'A Page is dynamic and built on the fly. An Article will be cached.',
          type: 'string',
          options: {
            list: [
              {title: 'Page', value: 'page'},
              {title: 'Article', value: 'article'},
            ],
          },
          group: 'main',
        },
        {
          name: 'mobileBackgroundImage',
          title: 'Mobile Background Image',
          type: 'image',
          group: 'configuration',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          group: 'configuration',
        },
        {
          name: 'publishDate',
          type: 'datetime',
          title: 'Publish Date',
          description: 'Will be published on this date',
          group: 'configuration',
        },
        {
          name: 'headerBGVariant',
          title: 'Header BG Variant',
          description: 'This will default to Navigation header, if left empty.',
          type: 'string',
          options: {
            list: headerBGVariant,
          },
          group: 'configuration',
        },
        {
          title: 'Connected Stores',
          name: 'connectedStores',
          type: 'array',
          group: 'configuration',
          of: [{type: 'connectedStore'}],
        },
        {
          title: 'Items',
          name: 'items',
          type: 'array',
          group: 'main',
          of: [...(items?.pageItems ?? [])],
        },
        {
          title: 'Show Bottom Navigation',
          name: 'showBottomNavigation',
          type: 'boolean',
          group: 'configuration',
        },
        {
          title: 'Bottom Navigation Items',
          name: 'bottomNavigationItems',
          type: 'array',
          description: 'This field will be used for Mobile bottom navigation',
          hidden: ({parent}: any) => !parent?.showBottomNavigation,
          of: [...(items?.pageItems ?? [])],
        },
        {
          title: 'SEO',
          name: 'seo',
          type: 'seoConfig',
          group: 'seo',
        },
        {
          title: 'Is Live',
          name: 'isLive',
          type: 'boolean',
          group: 'main',
          hidden: true,
          readOnly: ({currentUser}: any) => !isAdminUser(currentUser),
        },
      ],
      preview: {
        select: {
          title: 'title',
          items: 'items',
          path: 'path',
        },
        prepare({title, items, path}: any) {
          const itemCount = items ? items.length : 0
          const itemsDisplay = itemCount === 1 ? 'Only 1 item' : `${itemCount} items`

          return {
            title,
            subtitle: `${itemsDisplay}, ${path ?? ''}`,
          }
        },
      },
    }
  }
}
