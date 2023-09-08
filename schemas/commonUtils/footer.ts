import { BiDockBottom } from "react-icons/bi";
const footerVariants = [
    {
      title: "Default Footer",
      value: "default-footer",
    },
    {
      title: "Custom Footer",
      value: "custom-footer",
    },
  ]
export default {
    title: 'Footer',
    name: 'footer',
    type: 'document',
    icon: BiDockBottom,
    initialValue: {
        variant: 'default',
    },
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            name: "variant",
            title: "Variant",
            type: "string",
            options: {
              list: [...footerVariants],
            },
          },
        {
            title: 'Path',
            name: 'path',
            type: 'string',
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
        },
        {
            title: 'Tag Line',
            name: 'tagLine',
            type: 'string',
        },
        {
            title: 'Support Details',
            name: 'supportDetails',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        title: "Phone",
                        name: "phone",
                        type: "slug"
                    },
                    {
                        title: "Tag Line",
                        name: "tagLine",
                        type: "string"
                    },
                    {
                        title: "Title",
                        name: "title",
                        type: "string"
                    },
                    {
                        title: "Mail",
                        name: "mail",
                        type: "email"
                    }
                ]
            }],
        },
        {
            title: "Cta Label",
            name: "ctaLabel",
            type: "array",
            of: [{
                type: "navigationItem",
            }],
        },
        {
            title: "Hotel Details",
            name: "hotelDetails",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [

                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string'
                        },
                        {
                            title: 'Sub Title',
                            name: 'subTitle',
                            type: 'string'
                        },
                        {
                            title: 'Quick Links',
                            name: 'quickLinks',
                            type: 'array',
                            of: [{ type: 'navigationItem' }]
                        },
                    ]
                }
            ]
        },
        {
            title: "Download Buttons",
            name: "downloadButtons",
            type: "array",
            of: [{
                type: "navigationItem",
            }],
        },
    {
      title: "faqs",
      name: "faqs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "items",
              name: "items",
              type: "array",
              of:[
                {
                    type:"navigationItem"
                }
              ]
            },
          ],
        },
      ],
    },
    {
      title: "Brands",
      name: "brands",
      type: "array",
      of: [
        {
          type: "navigationItem",
        },
      ],
    },
    {
      title: "Legal Information",
      name: "legalInformation",
      type: "array",
      of: [{ type: "navigationItem" }],
    },
    {
      title: "Icons",
      name: "icons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Icons",
              name: "icons",
              type: "array",
              of: [{ type: "navigationItem" }],
            },
          ],
        },
      ],
    },
  ],
};