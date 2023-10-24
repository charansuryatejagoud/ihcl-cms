import {FeatureSchemaDefinition} from '../../schemas/types'
import {ActionTypes} from './objects/action-types'
import {AppIcons} from './documents/app-icons'
import {BasicDetails} from './objects/basic-details'
import {MediaInput} from './objects/media-input'
import {ContentSpecification} from './objects/content-specification'
import {TaxonomyInfo} from './documents/taxonomy-info'
import {Vouchers} from './documents/vouchers'
import {LocationInfo} from './objects/locationInfo'
import {DateRange} from './objects/date-range'
import {CategoriesInfo} from './objects/categories-info'
import {Hotel} from './hotels/documents/hotel'
import {RateCodes} from './hotels/documents/rate-codes'
import {SocialInfo} from './hotels/documents/social-info'
import {HotelNavigation} from './hotels/documents/hotel-navigation'
import {Attractions} from './hotels/documents/attractions'
import {Awards} from './hotels/documents/awards'
import {Contact} from './hotels/documents/contact'
import {SignatureDining} from './hotels/documents/signature-dining'
import {DiningInfo} from './hotels/objects/dining-info'
import {Experiences} from './hotels/documents/experiences'
import {Gallery} from './hotels/documents/gallery'
import {Holidays} from './hotels/documents/holidays'
import {HolidayInfo} from './hotels/objects/holiday-info'
import {LocationAndDirections} from './hotels/objects/location-and-directions'
import {Offers} from './hotels/documents/offers'
import {OfferInfo} from './hotels/objects/offer-info'
import {ExclusiveOffers} from './hotels/documents/exclusive-offers'
import {ExclusiveOfferInfo} from './hotels/objects/exclusive-offer-Info'
import {Address} from './hotels/documents/address'
import {Availability} from './hotels/documents/availability'
import {Facilities} from './hotels/documents/facilities'
import {FacilityInfo} from './hotels/objects/facility-info'
import {Highlights} from './hotels/documents/highlights'
import {Overview} from './hotels/documents/overview'
import {Rooms} from './hotels/documents/rooms'
import {RoomInfo} from './hotels/objects/room-info'
import {ModalDetails} from './hotels/objects/modal-details'
import {Venues} from './hotels/documents/venues'
import {VenueAndOccasionInfo} from './hotels/objects/venue-occasion-info'
import {VenuesAndOccasions} from './hotels/objects/venues-occasions'
import {WeddingEventInfo} from './hotels/objects/wedding-event-info'
import {Events} from './hotels/documents/events'
import {Wellness} from './hotels/documents/wellness'
import {WellnessInfo} from './hotels/objects/wellness-info'
import {Treatments} from './hotels/objects/treatments'
import {SpaInfo} from './hotels/objects/spa-info'
import {DestinationNavigation} from './destinations/documents/destination-navigation'
import {About} from './destinations/documents/about'
import {Country} from './destinations/documents/country'
import {Destination} from './destinations/documents/destination'
import {DestinationSeoInfo} from './destinations/objects/destination-seoInfo'
import {TabInfo} from './destinations/objects/tab-info'
import {Hampers} from './documents/hampers'
import {Epicure} from './documents/epicure'
import {ColumnData} from './objects/column-data'
import {applicableBenefits} from './objects/applicable-benefits'
import {RestaurantBrand} from './documents/restaurant-brand'
import {OfferHolidays} from './documents/offer-holidays'
import {OfferPackages} from './documents/offer-packages'
import {OfferThemes} from './documents/offer-themes'
import {Restaurants} from './documents/restaurants'
import {RestaurantDetails} from './objects/restaurant-details'
import {ProductDetail} from './documents/product-detail'
import {Products} from './documents/products'

export const contentFragments: FeatureSchemaDefinition = {
  schemas: [
    ActionTypes,
    BasicDetails,
    MediaInput,
    AppIcons,
    ContentSpecification,
    TaxonomyInfo,
    Vouchers,
    LocationInfo,
    DateRange,
    CategoriesInfo,
    Hotel,
    ContentSpecification,
    RateCodes,
    SocialInfo,
    HotelNavigation,
    Attractions,
    Awards,
    Contact,
    SignatureDining,
    DiningInfo,
    Experiences,
    Gallery,
    Holidays,
    HolidayInfo,
    LocationAndDirections,
    Offers,
    OfferInfo,
    ExclusiveOffers,
    ExclusiveOfferInfo,
    Address,
    Availability,
    Facilities,
    FacilityInfo,
    Highlights,
    Overview,
    Rooms,
    RoomInfo,
    ModalDetails,
    Venues,
    VenueAndOccasionInfo,
    VenuesAndOccasions,
    WeddingEventInfo,
    Events,
    Wellness,
    WellnessInfo,
    Treatments,
    SpaInfo,
    DestinationNavigation,
    About,
    Country,
    Destination,
    DestinationSeoInfo,
    TabInfo,
    Hampers,
    Epicure,
    ColumnData,
    applicableBenefits,
    RestaurantBrand,
    OfferHolidays,
    OfferPackages,
    OfferThemes,
    Restaurants,
    RestaurantDetails,
    Products,
    ProductDetail,
  ],
}
