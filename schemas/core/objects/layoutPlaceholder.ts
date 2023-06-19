import {
  IoApps,
  IoCodeWorking as ParameterMapIcon,
  IoLogoWebComponent as Icon,
  IoSettings,
} from "react-icons/io5";
import { SchemaItem, VariantDefinition } from "../../types";
import { hiddenField } from "../../shared-utils";

export default function placeholder({
  variants,
  cardVariants,
}: {
  variants: SchemaItem[];
  cardVariants: VariantDefinition[];
}) {
  return {
    name: "layoutPlaceholder",
    title: "Layout Placeholder",
    type: "object",
    icon: Icon,
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      { ...hiddenField, group: "main" },
      {
        name: "charactersLimit",
        title: "Characters Limit",
        type: "number",
        group: "main",
        Description: "Number of characters limit for placeholder description.",
      },
      {
        name: "groupLargeVariant",
        title: "Group Large Variant",
        type: "string",
        options: {
          list: variants,
        },
        group: "main",
      },
      {
        name: "cardLargeVariant",
        title: "Card Large Variant",
        type: "string",
        options: {
          list: cardVariants,
        },
        group: "main",
      },
      {
        name: "aesthetic",
        title: "Aesthetic",
        type: "reference",
        to: [{ type: "uiConfiguration" }],
      },
      {
        name: "contentType",
        title: "Content Type",
        type: "string",
        options: {
          list: [
            {
              title: "Hotel Rooms",
              value: "hotelRooms",
            },
            {
              title: "Hotel Signature Dining",
              value: "hotelSignatureDining",
            },
            {
              title: "Hotel Attractions",
              value: "hotelAttractions",
            },
            {
              title: "Hotel Event Venues",
              value: "hotelEventVenues",
            },
            {
              title: "Hotel Awards",
              value: "hotelAwards",
            },
            {
              title: "Hotel Offers",
              value: "hotelOffers",
            },
            {
              title: "Hotel Holidays",
              value: "hotelHolidays",
            },
          ],
        },
        group: "main",
      },
      {
        name: "primaryAction",
        title: "Primary Action",
        type: "navigationItem",
      },
      {
        name: "secondaryAction",
        title: "Secondary Action",
        type: "navigationItem",
      },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "subtitle",
        variant: "variant",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, variant, hidden }) {
        const hiddenIndicator = hidden ? "🚫 " : "";
        const variantText = variant ? `(${variant})` : "";

        return {
          title: `${hiddenIndicator}${title ?? "<Layout Placeholder>"}`,
          subtitle: `${subtitle ?? ""}${variantText}`,
        };
      },
    },
  };
}
