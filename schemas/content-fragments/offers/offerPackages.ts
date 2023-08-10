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
      name: "type",
      title: "Type",
      type: "string",
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
          { title: "Multiple Themes and Packages", value: "multipleThemesAndPackages" },
        ],
      },
    },
    {
      name: "validityDates",
      title: "Validity Dates",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "stayDates",
      title: "Stay Dates",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "blackoutDates",
      title: "Blackout Dates",
      type: "array",
      of: [{ type: "string" }],
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
              initialValue: 'PACKAGE INCLUSIONS',
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
              to: [{type: "offerThemes"}],
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
        },]
    },
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
  ],
};
