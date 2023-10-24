import {FeatureSchemaDefinition} from '../../schemas/types'
import {UiConfiguration} from './objects/ui-configuration'
import {Banner, BannerComponents} from './objects/banner'
import {ImageAsset} from './objects/image-asset'
import {Images} from './objects/images'
import {LinkOnHover} from './objects/link-on-hover'
import {videoAsset} from './objects/video-assset'
import {Authentication} from './objects/authentication'
import {Membership} from './objects/membership'
import {Title} from './objects/title'
import {RichText} from './objects/rich-text'
import {Comparator} from './objects/comparator'
import {CardAssets} from './objects/card-assets'
import {CfReference} from './objects/cf-reference'
import {Comparative} from './objects/comparative'
import {Custom} from './objects/custom'
import {DialogHeader} from './objects/dialog-header'
import {Divider} from './objects/divider'
import {DropDownItems} from './objects/dropdown-items'
import {Footer} from './documents/footer'
import {Form} from './objects/form'
import {Header} from './documents/header'
import {InputField} from './objects/input-field'
import {Items} from './objects/items'
import {Specification} from './objects/specification'
import {Stepper} from './objects/stepper'
import {ContentFragment} from './objects/content-fragment'
import {Tabs, Tab} from './objects/tabs'

export const commonUtils: FeatureSchemaDefinition = {
  items: {
    pageItems: [
      {type: 'banner'},
      {
        type: 'richText',
      },
      {type: 'comparator'},
      {type: 'tabsComponent'},
      {
        type: 'stepper',
      },
      {
        type: 'divider',
      },
      {
        type: 'formComponent',
      },
      {
        type: 'authentication',
      },
      {
        type: 'custom',
      },
    ],
    groupItems: [
      {type: 'richText'},
      {
        type: 'stepper',
      },
      {type: 'comparator'},
      {
        type: 'cfReference',
      },
      {type: 'tabsComponent'},
      {type: 'divider'},
      {
        type: 'formComponent',
      },
      {
        type: 'custom',
      },
    ],
  },
  schemas: [
    UiConfiguration,
    Banner,
    BannerComponents,
    videoAsset,
    Images,
    ImageAsset,
    Title,
    LinkOnHover,
    Membership,
    Authentication,
    RichText,
    Comparator,
    CardAssets,
    ContentFragment,
    CfReference,
    Comparative,
    Custom,
    DialogHeader,
    Divider,
    DropDownItems,
    Footer,
    Form,
    Header,
    InputField,
    Items,
    Specification,
    Stepper,
    Tabs,
    Tab,
  ],
  variants: {
    group: [
      {
        title: 'Default',
        value: 'ihcl.core.group.default',
      },
      {
        title: 'Group With Split Cards',
        value: 'ihcl.core.group.group-with-split-cards',
      },
      {
        title: 'Carousel With Back Ground Image',
        value: 'ihcl.core.group.carousel-with-back-ground-image',
      },
      {
        title: '4 Row Grid',
        value: 'ihcl.core.group.4-row-grid',
      },
      {
        title: 'Group With 3 Column Cards Grid',
        value: 'ihcl.core.group.group-with-3-column-cards-grid',
      },
      {
        title: 'Highlighted 2 Card Carousel',
        value: 'ihcl.core.group.highlighted-2-card-carousel',
      },

      {
        title: 'Group With VideoPlayer',
        value: 'ihcl.core.group.group-with-videoPlayer',
      },
      {
        title: 'Hotel Address Data',
        value: 'ihcl.core.group.hotel-address-data',
      },
      {
        title: 'Hotel Address Data(Layout Placeholder)',
        value: 'ihcl.core.group.hotel-address-data-layout-placeholder',
      },
      {
        title: 'Contact Info',
        value: 'ihcl.core.group.contact-info',
      },
      {title: 'Multiple Data', value: 'ihcl.core.group.multiple-data'},
      {
        title: 'Group With Filter Buttons',
        value: 'ihcl.core.group.group-with-filter-buttons',
      },
      {
        title: 'Images With Single Column Grid',
        value: 'ihcl.core.group.images-with-single-column-grid',
      },
      {
        title: 'Group With Carousel',
        value: 'ihcl.core.group.group-with-carousel',
      },
      {
        title: 'Location Manifest',
        value: 'ihcl.core.group.group-location-manifest',
      },
      {
        title: 'Location Manifest Item',
        value: 'ihcl.core.group.group-location-manifest-item',
      },
      {
        title: 'Group With Sectional Tabs',
        value: 'ihcl.core.group.group-with-sectional-tabs',
      },
      {
        title: 'Group With Stepper And Tabs',
        value: 'ihcl.core.group.group-with-stepper-and-tabs',
      },
      {title: 'Stepper Items', value: 'ihcl.core.group.stepper-items'},
      {
        title: 'Carousal With Single Card Media',
        value: 'ihcl.core.group.carousal-with-single-card-media',
      },

      {title: 'Toll Free No', value: 'ihcl.core.group.toll-free-no'},
      {
        title: 'Group With Multiple Buttons',
        value: 'ihcl.core.group.group-with-multiple-buttons',
      },
      {
        title: 'Group With Side Aligned Content Link',
        value: 'ihcl.core.group.group-with-side-aligned-content-link',
      },
      {
        title: 'Center Aligned Content',
        value: 'ihcl.core.group.center-aligned-content',
      },
      {
        title: 'Carousel With 3 Column Grid',
        value: 'ihcl.core.group.carousel-with-three-column-grid',
      },
      {
        title: 'Carousel With 3 Column Grid(Layout Placeholder)',
        value: 'ihcl.core.group.carousel-with-three-column-grid-layout-placeholder',
      },
      {
        title: '4 Column Rectangle Grid',
        value: 'ihcl.core.group.four-column-rectangle-grid',
      },
      {
        title: 'Multiple Row 4 Column Grid',
        value: 'ihcl.core.group.multiple-row-four-column-grid',
      },
      {
        title: 'Group With Left Media Right Content Card With Tabs',
        value: 'details.group.group-with-card-left-media-right-content-with-tabs-aspect-ratio-2:4',
      },
      {
        title: 'Carousel With Tabs',
        value: 'ihcl.core.group.carousel-with-tabs',
      },
      {
        title: 'Destinations Carousel With Tabs(Layout Placeholder)',
        value: 'ihcl.core.group.carousel-with-tabs-layout-placeholder',
      },
      {
        title: 'Multi Static With Tabs',
        value: 'ihcl.core.group.multi-static-with-tabs',
      },
      {
        title: '8:4 Ratio Grid With only two items',
        value: 'ihcl.core.group.8-4-ratio-grid-with-only-two-items',
      },
      {
        title: 'Carousel Transparent 3 cards',
        value: 'ihcl.core.group.carousel-transparent-3-cards',
      },
      {
        title: 'Multiple Square Card Carousel',
        value: 'ihcl.core.group.multiple-square-card-carousel',
      },
      {
        title: '3 Column Grid With Border ',
        value: 'ihcl.core.group.3-column-grid-with-border',
      },
      {
        title: '3 Column Grid With Border (Offers Layout Placeholder)',
        value: 'ihcl.core.group.3-column-grid-with-border-offers-layout-placeholder',
      },
      {
        title: 'Option Selector PopUp Modal',
        value: 'ihcl.core.group.option-selector-popup-modal',
      },
      {
        title: 'Option Selector PopUp Modal Layout Placeholder',
        value: 'ihcl.core.group.option-selector-popup-modal-layout-placeholder',
      },
      {
        title: 'Group With Vertical Components',
        value: 'ihcl.core.group.group-with-vertical-components',
      },
      {
        title: 'Hexagonal Content',
        value: 'ihcl.core.group.hexagonal-content',
      },
      {
        title: 'Group With SignUp Form',
        value: 'ihcl.core.group.signup-form',
      },
      {
        title: 'Cookies Management System Modal',
        value: 'common-utils.group.cookies-management-system-modal',
      },
      {
        title: 'Group With 3 Column Cards Grid (Layout Placeholder)',
        value: 'ihcl.core.group.group-with-3-column-cards-grid-layout-placeholder',
      },
      {
        title: 'Center Moving Carousel With BackGround Gradient',
        value: 'common-utils.group.center-moving-carousel-with-background-gradient',
      },
      {
        title: 'Images With Single Column Grid(Layout Placeholder)',
        value: 'ihcl.core.group.images-with-single-column-grid-layout-placeholder',
      },
      {
        title: 'Default Tab Filter',
        value: 'common-utils.default.tab.filter',
      },
      {
        title: 'Filter Address Dropdown',
        value: 'ihcl.core.group.filter-address-dropdown',
      },
      {
        title: 'Accordion Wrapper',
        value: 'ihcl.core.group.accordion-wrapper',
      },
      {
        title: 'Tabular Data',
        value: 'ihcl.core.group.tabular-data',
      },
    ],
    card: [
      {
        title: 'Card With Focused Title',
        value: 'ihcl.core.card.card-with-focused-title',
      },
      {
        title: 'Card Ends Aligned Content',
        value: 'ihcl.core.card.card-ends-aligned-content',
      },
      {title: 'Vertical Card', value: 'ihcl.core.card.vertical-card'},
      {title: 'Image Title Tabs', value: 'ihcl.core.card.image-title-tabs'},

      {
        title: 'Card With Description Actions',
        value: 'ihcl.core.card.card-with-description-actions',
      },
      {
        title: '[Split Cards] Card With Aspect Ratio (1:2)',
        value: 'ihcl.core.card.card-with-aspect-ratio-of-1:2',
      },
      {
        title: 'Carousel Card With Aspect Ratio (4:3)',
        value: 'ihcl.core.card.carousel-card-with-aspect-ratio-4:3',
      },
      {
        title: 'Card With Right Aligned Title And Link',
        value: 'ihcl.core.card.card-with-right-aligned-title-and-link',
      },

      {
        title: 'Rectangle Card With Aspect Ratio (2:4)',
        value: 'ihcl.core.card.rectangle-card-with-right-aligned-title-aspect-ratio-2:4',
      },
      {
        title: 'Image Or Video With Full Width',
        value: 'ihcl.core.card.image-or-video-with-full-width',
      },
      {
        title: 'Social Media Square Card',
        value: 'ihcl.core.card.social-media-square-card',
      },
      {
        title: 'Center Aligned Title Tabs',
        value: 'ihcl.core.card-center-aligned-title-tabs',
      },
      {
        title: 'Social Media Card Image',
        value: 'ihcl.core.card.social-media-card-image',
      },
      {
        title: 'Card With Center Aligned Content',
        value: 'ihcl.core.card.card-with-center-aligned-content',
      },
      {
        title: 'Image and Content With Aspect Ratio 1:1',
        value: 'ihcl.core.card.image-and-content-with-aspect-ratio-1:1',
      },
      {
        title: 'Default Bottom Navigation',
        value: 'ihcl.core.card.default-bottom-navigation',
      },
      {
        title: 'Custom Bottom Navigation',
        value: 'ihcl.core.card.custom-bottom-navigation',
      },
      {
        title: 'Media With Bottom And Top Content',
        value: 'ihcl.core.card.media-with-bottom-and-top-content',
      },
      {
        title: 'Triangle Shape Image On Content',
        value: 'ihcl.core.card.triangle-shape-image-on-content',
      },
      {
        title: 'City Card',
        value: 'ihcl.core.card.city-card',
      },
      {
        title: ' Bottom Navigation With Two Buttons',
        value: 'ihcl.core.card.bottom-navigation-with-two-buttons',
      },
      {
        title: '4 Column Grid With Bold Title',
        value: 'ihcl.core.card.4-column-grid-with-bold-title',
      },
      {
        title: 'Center Aligned Content',
        value: 'ihcl.core.card.center-aligned-content',
      },
      {
        title: 'Center Aligned Title Tabs With Aspect Ratio 1:3',
        value: 'ihcl.core.card-center-aligned-title-tabs-with-aspect-ratio-1:3',
      },
    ],
    placeholder: [
      {title: 'Toll-Free-Numbers', value: 'ihcl.core.toll-free-numbers'},
      {
        title: 'Search-Result-Component',
        value: 'ihcl.core.search-result-component',
      },
      {
        title: 'Social Feed',
        value: 'common-utils.placeholders.social-feed',
      },
      {
        title: 'Radio Button Filters',
        value: 'common-utils.placeholders.radio-button-filters',
      },
      {
        title: 'NeuCoins Redeem & Save',
        value: 'common-utils.placeholders.redeem-save',
      },
      {
        title: 'Redeem & Save',
        value: 'common-utils.placeholders.redeem-and-save',
      },
    ],
    nudge: [
      {title: 'Default Nudge', value: 'ihcl.core.nudge.default'},

      {title: 'Banner Nudge', value: 'ihcl.core.nudge.banner'},
      {title: 'Open Url Nudge', value: 'ihcl.core.nudge.open-url'},
      {title: 'Pincode Nudge', value: 'ihcl.core.nudge.pincode'},
      {title: 'Navigation', value: 'ihcl.core.nudge.navigation'},
      {
        title: 'Alert Message Status',
        value: 'ihcl.core.nudge.alert-message-status',
      },
    ],
    dialog: [
      {title: 'Alert', value: 'ihcl.core.alert'},
      {title: 'Bottom Sheet', value: 'ihcl.core.bottom-Sheet'},
      {title: 'Nested Bottom Sheet', value: 'ihcl.core.nested-bottom-sheet'},
      {
        title: 'Alert Without Close Cta',
        value: 'ihcl.core.alert-without-close-cta',
      },
      {
        title: 'Cookies System Modal',
        value: 'ihcl.core.cookies-system-modal',
      },
    ],
    tabs: [
      {
        title: 'Multiple Tabs with Border',
        value: 'ihcl.core.tabs.multiple-tabs-with-border',
      },
    ],
    switchCaseBlock: [
      {
        title: 'Default Switch Case',
        value: 'ihcl.core.default-switch-case',
      },
      {
        title: 'Payments Switch Case',
        value: 'ihcl.core.switchCaseBlock.payments',
      },
    ],
    forms: [
      {
        title: 'Subscription',
        value: 'common-utils.forms.subscription',
      },
    ],
    connectedStores: [
      {
        title: 'Search Results',
        value: 'ihcl.core.connectedStores.search-results',
      },
    ],
  },
}
