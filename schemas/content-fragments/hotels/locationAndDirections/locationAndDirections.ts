export default {
    title: "Location And Directions",
    name: "locationAndDirections",
    type: "object",
    fields: [
      {
        name: "propertyLocation",
        title: "Property Location",
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
                name: "locationDetails",
                title: "Location Details",
                type: "locationInfo",
              }
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
        name: "airportLocation",
        title: "Airport Location",
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
                name: "locationDetails",
                title: "Location Details",
                type: "locationInfo",
              }
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
        name: "localTransportation",
        title: "Local Transportation",
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
                name: "locationDetails",
                title: "Location Details",
                type: "locationInfo",
              }
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
    ],
  };
  