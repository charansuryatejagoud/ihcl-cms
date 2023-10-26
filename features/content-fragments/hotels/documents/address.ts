import {contactTypes} from '../../../../utils/constants'
import {Content} from '../../../../schemas/base'
import {SchemaInputProps} from '../../../../schemas/types'
import {addressTypes} from '../utility'

export class Address extends Content {
  name = 'address'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Address',
      name: 'address',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {list: addressTypes},
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'mobile', type: 'string', title: 'Mobile'},
                {
                  name: 'type',
                  type: 'string',
                  title: 'Type',
                  options: {
                    list: contactTypes,
                  },
                },
              ],
            },
          ],
          hidden: ({parent}: any) => parent?.type !== 'sales-office',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'email', type: 'string', title: 'Email'},
                {
                  name: 'type',
                  type: 'string',
                  title: 'Type',
                  options: {
                    list: contactTypes,
                  },
                },
              ],
            },
          ],
          hidden: ({parent}: any) => parent?.type !== 'sales-office',
        },
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'title',
        },
        {
          name: 'addressLine1',
          title: 'Adddress Line 1',
          type: 'string',
        },
        {
          name: 'addressLine2',
          title: 'Adddress Line 2',
          type: 'string',
        },
        {
          name: 'landmark',
          title: 'Landmark',
          type: 'string',
        },
        {
          name: 'street',
          title: 'Street',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
        {
          name: 'locality',
          title: 'Locality',
          type: 'string',
        },
        {
          name: 'pincode',
          title: 'Pincode',
          type: 'string',
        },
        {
          name: 'latitude',
          title: 'Latitude',
          type: 'string',
        },
        {
          name: 'longitude',
          title: 'Longitude',
          type: 'string',
        },
        {
          name: 'regionKey',
          title: 'Region Key',
          type: 'string',
        },
        {
          name: 'locationAndDirectionsInfo',
          title: 'Location & Directions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'basicInfo',
                  title: 'Basic Info',
                  type: 'basicDetails',
                },
                {
                  name: 'locationDetails',
                  title: 'Location Details',
                  type: 'locationInfo',
                },
              ],
              preview: {
                select: {
                  title: 'basicInfo',
                },
                prepare(selection: any) {
                  const {title} = selection
                  return {
                    title: title.title,
                  }
                },
              },
            },
          ],
        },
      ],
    }
  }
}
