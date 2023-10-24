import {bootstrap} from './bootstrap'
import {search} from '../features/search'
import {contentFragments} from '../features/content-fragments'
import {aboutUs} from '../features/about-us'
import {authentication} from '../features/authentication'
import {bookings} from '../features/bookings'
import {business} from '../features/business'
import {events} from '../features/events'
import {forms} from '../features/forms'
import {giftCards} from '../features/gift-cards'
import {myAccount} from '../features/my-account'
import {notifications} from '../features/notifications'
import {offers} from '../features/offers'
import {partners} from '../features/partners'
import {commonUtils} from '../features/common-utils'
import {core} from '../features/core'
import {holidays} from '../features/holidays'
import {hotelDetails} from '../features/hotel-details'

const schemas = bootstrap([
  core,
  commonUtils,
  aboutUs,
  search,
  contentFragments,
  authentication,
  bookings,
  business,
  events,
  forms,
  giftCards,
  holidays,
  hotelDetails,
  myAccount,
  notifications,
  offers,
  partners,
])
export const schemaTypes = schemas

//rateCode & rateCodeList need to delete from dataset and delete files
