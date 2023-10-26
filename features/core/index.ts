import {FeatureSchemaDefinition} from '../../schemas/types'
import {AppConfig} from './documents/app-config'
import {Category} from './documents/category'
import {Dialog} from './documents/dialog'
import {GiftCardGroup} from './documents/GiftCardsCollection/GiftCardGroup'
import {GiftCardsDetails} from './documents/GiftCardsCollection/GiftCardsDetails'
import {Page} from './documents/page'
import {Settings} from './documents/settings'
import {BlockContent} from './objects/block-content'
import {BlockImage} from './objects/block-image'
import {BlockSection} from './objects/block-section'
import {Card} from './objects/card'
import {ConnectedStore} from './objects/connected-store'
import {QuestionAndAnswer, Faq} from './objects/faq'
import {FileDocument} from './objects/file-document'
import {FormGroup} from './objects/form-group'
import {Group} from './objects/group'
import {LayoutPlaceholder} from './objects/layout-placeholder'
import {Link} from './objects/link'
import {NavigationItem} from './objects/navigation-item'
import {Nudge} from './objects/nudge'
import {Placeholder} from './objects/placeholder'
import {Seo} from './objects/seo'
import {SeoConfig} from './objects/seo-config'
import {SwitchCaseBlock} from './objects/switch-caseblock'

export const core: FeatureSchemaDefinition = {
  schemas: [
    Category,
    ConnectedStore,
    NavigationItem,
    Card,
    BlockContent,
    BlockSection,
    SeoConfig,
    Page,
    Settings,
    Link,
    AppConfig,
    Group,
    GiftCardGroup,
    GiftCardsDetails,
    Nudge,
    FileDocument,
    LayoutPlaceholder,
    Placeholder,
    SwitchCaseBlock,
    QuestionAndAnswer,
    Faq,
    Dialog,
    Seo,
    FormGroup,
    BlockImage,
  ],
  items: {
    pageItems: [
      {type: 'layoutPlaceholder'},
      {type: 'group'},
      {
        type: 'nudge',
      },
      {type: 'card'},
      {
        type: 'link',
      },
      {
        type: 'blockSection',
      },
      {
        type: 'blockImage',
      },
      {
        type: 'placeholder',
      },
      {
        type: 'faqs',
      },
      {
        type: 'switchCaseBlock',
      },
    ],
    groupItems: [
      {
        type: 'card',
      },
      {
        type: 'nudge',
      },
      {
        type: 'link',
      },
      {type: 'group'},
      {
        type: 'blockSection',
      },
      {
        type: 'faqs',
      },
      {
        type: 'blockImage',
      },
      {
        type: 'placeholder',
      },
      {type: 'switchCaseBlock'},
    ],
  },
  variants: {},
}
