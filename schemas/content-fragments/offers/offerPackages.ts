import { offerTypes } from "../../constants";

export default {
  title: "Offer Packages",
  name: "offerPackages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "identifier",
      title: "Identifier",
      type: "string",
    },
    {
      name: "rateCode",
      title: "Rate Code",
      type: "string",
    },
    {
      name: "promoCode",
      title: "Promo Code",
      type: "string",
    },
    {
      name: "offerType",
      title: "Offer Type",
      type: "string",
      options: {list : offerTypes}
    },
    {
      name: "themeInfo",
      title: "Theme Info",
      type: "tabInfo",
    },
    {
      name: "holidayOffer",
      title: "Holiday Offer",
      type: "boolean"
    },
    {
      name: "offerBannerTitle",
      title: "Offer Banner Title",
      type: "title",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "banner",
      title: "Banner",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "array",
      of: [{ type: "mediaInput" }],
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "title",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "packageType",
      title: "Package Type",
      type: "string",
      options: {
        list: [
          { title: "Single Package", value: "singlePackage" },
          { title: "Multiple Packages", value: "multiplePackages" },
          {
            title: "Multiple Themes and Packages",
            value: "multipleThemesAndPackages",
          },
        ],
      },
    },
    {
      name: "validityDates",
      title: "Validity Dates",
      type: "array",
      of: [{ type: "dateRange" }],
    },
    {
      name: "stayDates",
      title: "Stay Dates",
      type: "array",
      of: [{ type: "dateRange" }],
    },
    {
      name: "blackoutDates",
      title: "Blackout Dates",
      type: "array",
      of: [{ type: "dateRange" }],
    },
    {
      name: "hotels",
      title: "Package Inclusions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "participatingHotels",
              title: "Participating Hotels",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "hotel" }],
                },
              ],
            },
            {
              name: "sectionTitle",
              title: "Section Title",
              type: "title",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              rows: 4
            },
            {
              name: "thumbnail",
              title: "Thumbnail",
              type: "array",
              of: [{ type: "mediaInput" }],
            },
            {
              name: "inclusions",
              title: "Inclusions",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "basicInfo",
                      title: "Basic Info",
                      type: "basicDetails",
                    },
                    {
                      name: "inclusionTitle",
                      title: "Inclusion Title",
                      type: "string",
                      initialValue: "PACKAGE INCLUSIONS",
                      hidden: ({ document }) =>
                        document?.packageType == "singlePackage",
                    },
                    {
                      name: "inclusionIdentifier",
                      title: "Inclusion Identifier",
                      type: "string",
                      initialValue: "",
                      hidden: ({ document }) =>
                        document?.packageType == "singlePackage",
                    },
                    {
                      name: "highlights",
                      title: "Highlights",
                      type: "array",
                      of: [{ type: "string" }],
                      hidden: ({ document }) =>
                        document?.packageType == "singlePackage",
                    },
                    {
                      name: "inclusionTheme",
                      title: "Inclusion Theme",
                      type: "reference",
                      to: [{ type: "offerThemes" }],
                      hidden: ({ document }) =>
                        document?.packageType !== "multipleThemesAndPackages",
                    },
                  ],
                  preview: {
                    select: {
                      title: "basicInfo",
                    },
                    prepare(selection) {
                      const { title } = selection;
                      return {
                        title: title.title,
                      };
                    },
                  },
                },
              ],
            },
            {
              name: "pageTitle",
              title: "Page Title",
              type: "string",
            },
            {
              name: "seoKeywords",
              title: "SEO Keywords",
              type: "string",
            },
            {
              name: "seoDescription",
              title: "SEO Description",
              type: "text",
              rows: 5,
            }
          ],
          preview: {
            select: {
              title: "sectionTitle",
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: title.desktopTitle[0],
              };
            },
          },
        },
      ],
    },
    {
      name: "tnc",
      title: "TNC",
      type: "blockContent",
    },
    {
      name: "offerFAQs",
      title: "Offer FAQs",
      type: "object",
      fields: [
        {
          name: "items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  title: "Question",
                  name: "question",
                  type: "string",
                },
                {
                  title: "Answer",
                  name: "answer",
                  type: "blockContent",
                },
              ],
            },
          ],
        },
      ],
    }
  ],
};
