import {
  IoCodeWorking as ParameterMapIcon,
  IoConstruct as Icon,
} from "react-icons/io5";

export default {
  name: "appConfig",
  title: "App Configuration",
  type: "document",
  icon: Icon,
  // Disallow creation and deletion
  __experimental_actions: ["create",  "update", 'delete', "publish"],
  fields: [
    {
      name: "cityMap",
      title: "City Map",
      description: "Map of a city identifier to its possible values",
      type: "array",
      of: [
        {
          type: "object",
          title: "Parameter",
          icon: ParameterMapIcon,
          options: { columns: 2 },
          fields: [
            {
              name: "cityIdentifier",
              title: "City Identifier",
              description: "A unique identifier for a city",
              type: "string",
            },
            {
              name: "cities",
              title: "City Values",
              description: "Comma separated list of cities",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "cityIdentifier",
              subtitle: "cities",
            },
          },
        },
      ],
    },
    {
      name: "membership",
      title: "Membership",
      type: "array",
      of: [
        {
          type: "membership",
        },
      ],
    },
    {
      name: "cancellationDropdown",
      title: "Cancellation Dropdown",
      type: "array",
      of: [
        {
          type: "cancellationDropdown",
        },
      ],
    },
    {
      name: "bookingPaymentQueries",
      title: "Booking Payment Queries",
      type: "group",
    }
  ],
  preview: {
    prepare: () => {
      return {
        title: "App Configuration",
      };
    },
  },
};
