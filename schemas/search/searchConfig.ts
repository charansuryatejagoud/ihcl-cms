import { searchIdentifiers } from "../constants";

export default {
  name: "searchConfig",
  title: "Search Config",
  type: "document",
  description: "Popular Search Cases for Global Search",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "searchTabs",
      title: "Search Tabs",
      type: "array",
      of: [
        {
          name: "searchTab",
          title: "Search Tab",
          type: "object",
          fields: [
            {
              name: "tabTitle",
              title: "Tab Title",
              type: "string",
            },
            {
              name: "tabIdentifier",
              title: "Tab Identifier",
              type: "string",
              options: { list: searchIdentifiers },
            },
            {
              name: "popularItems",
              title: "Popular Items",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "itemList",
                  title: "Item List",
                  type: "array",
                  of: [
                    {
                      type: "reference",
                      to: [
                        {
                          type: "hotel",
                          // hidden: ({ document }) => document?.tabIdentifier != "hotels"
                        },
                        {
                          type: "restaurants",
                          // hidden: ({ document }) => document?.tabIdentifier != "restaurants"
                        },
                        {
                          type: "offerHolidays",
                          // hidden: ({ document }) => document?.tabIdentifier != "holidays"
                        },
                      ],
                      options: {
                        filter: "key != $key",
                        filterParams: { key: "hotel" },
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "popularInspirations",
              title: "Popular Inspirations",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "itemList",
                  title: "Item List",
                  type: "array",
                  of: [{ type: "string", name: "text" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
