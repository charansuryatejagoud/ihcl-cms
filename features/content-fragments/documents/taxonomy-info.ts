import {
  hospitalityTitles,
  propertyCategories,
  hotelTypes,
  holidayExperiences,
  holidayThemes,
  posTypes,
  statusTypes,
  pmsNames,
  flagTypes,
  restaurantTypes,
  dressCodes,
  cuisines,
  therapies,
  searchCategoryType,
  hotelFeatures,
} from '../../../utils/constants'
import {Content} from '../../../schemas/base'
import {SchemaInputProps} from '../../../schemas/types'

export class TaxonomyInfo extends Content {
  name = 'taxonomyInfo'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'taxonomyInfo',
      title: 'TaxonomyInfo',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'brandKey',
          title: 'Brand Key',
          type: 'string',
        },
        {
          name: 'ihclHotelKey',
          title: 'IHCL Hotel Key',
          type: 'string',
        },
        {
          name: 'hotelCode',
          title: 'Hotel Code',
          type: 'string',
        },
        {
          name: 'hospitalityTitle',
          title: 'Hospitality Title',
          type: 'string',
          options: {
            list: hospitalityTitles,
          },
        },
        {
          name: 'propertyCategory',
          title: 'Category',
          type: 'string',
          options: {list: propertyCategories},
        },
        {
          name: 'hotelType',
          title: 'Hotel Type',
          type: 'string',
          options: {
            list: hotelTypes,
          },
        },
        {
          name: 'holidayExperience',
          title: 'Holiday Experience',
          type: 'string',
          options: {
            list: holidayExperiences,
          },
        },
        {
          name: 'holidayTheme',
          title: 'Holiday THeme',
          type: 'string',
          options: {
            list: holidayThemes,
          },
        },
        {
          name: 'posTypes',
          title: 'POS Types',
          type: 'string',
          options: {
            list: posTypes,
          },
        },
        {
          name: 'hotelPmsCode',
          title: 'Hotel PMS Code',
          type: 'string',
        },
        {
          name: 'orionCode',
          title: 'Orion Code',
          type: 'string',
        },
        {
          name: 'siebelCode',
          title: 'Siebel Code',
          type: 'string',
        },
        {
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: statusTypes,
          },
        },
        {
          name: 'legalEntity',
          title: 'Legal Entity',
          type: 'string',
        },
        {
          name: 'currency',
          title: 'Currency',
          type: 'string',
        },
        {
          name: 'pmsName',
          title: 'PMS Name',
          type: 'string',
          options: {
            list: pmsNames,
          },
        },
        {
          name: 'nonOrionFlag',
          title: 'Non Orion FLag',
          type: 'string',
          options: {
            list: flagTypes,
          },
        },
        {
          name: 'ticFlag',
          title: 'Tic FLag',
          type: 'string',
          options: {
            list: flagTypes,
          },
        },
        {
          name: 'epicureFlag',
          title: 'Epicure FLag',
          type: 'string',
          options: {
            list: flagTypes,
          },
        },
        {
          name: 'updatedDate',
          title: 'Updated Date',
          type: 'datetime',
        },
        {
          name: 'createdDate',
          title: 'Created Date',
          type: 'datetime',
        },
        {
          name: 'activeInd',
          title: 'Active Ind',
          type: 'boolean',
        },
        {
          name: 'synxisHotelId',
          title: 'Synxis Hotel Id',
          type: 'string',
        },
        {
          name: 'rating',
          title: 'Rating',
          type: 'number',
        },
        {
          name: 'aminities',
          title: 'Aminities',
          type: 'string',
        },
        {
          name: 'longDescription',
          title: 'Long Description',
          type: 'string',
        },
        {
          name: 'shortDescription',
          title: 'Short Description',
          type: 'string',
        },
        {
          name: 'images',
          title: 'Images',
          type: 'string',
        },
        {
          name: 'highlights',
          title: 'Highlights',
          type: 'string',
        },
        {
          name: 'restaurantTypes',
          title: 'Restaurant Types',
          type: 'string',
          options: {
            list: restaurantTypes,
          },
        },
        {
          name: 'dressCodes',
          title: 'Dress Codes',
          type: 'string',
          options: {
            list: dressCodes,
          },
        },
        {
          name: 'cuisines',
          title: 'Cuisines',
          type: 'string',
          options: {
            list: cuisines,
          },
        },
        {
          name: 'therapies',
          title: 'Therapies',
          type: 'string',
          options: {
            list: therapies,
          },
        },
        {
          name: 'searchCategory',
          title: 'Search Category',
          type: 'string',
          options: {
            list: searchCategoryType,
          },
        },
        {
          name: 'hotelFeature',
          title: 'Hotel Feature',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: hotelFeatures,
              },
            },
          ],
        },
        {
          name: 'restaurantName',
          title: 'Restaurant Name',
          type: 'string',
        },
        {
          name: 'menuLink',
          title: 'Restaurant Link',
          type: 'string',
        },
        {
          name: 'timings',
          title: 'Timings',
          type: 'string',
        },
        {
          name: 'diningPath',
          title: 'Dining Path',
          type: 'string',
        },
        {
          name: 'lunch',
          title: 'Lunch',
          type: 'string',
        },
        {
          name: 'dinner',
          title: 'Dinner',
          type: 'string',
        },
        {
          name: 'destinationPath',
          title: 'Destination Path',
          type: 'string',
        },
      ],
    }
  }
}
