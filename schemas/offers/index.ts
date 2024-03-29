import { FeatureSchemaDefinition } from "schemas/types";

export const Offers: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title: "[Offers] 3 Column Grid With No Border Lines For Cards",
        value: "offers.group.3-column-grid-with-no-borders-lines-for-cards",
      },
      {
        title: "[Offers] T & C Dropdown Content",
        value: "offers.group.t&c-dropdown-content"
      }
    ],
    forms:[ 
      {
        title: "[Offers] Book A Stay Template",
        value: "offers.form.book-a-stay-template"
      }
    ],
    dialog:[
      {
        title:"[Offers] Offers Check Rates",
        value:"offers.dialog.offers-check-rates"
      }
    ],
    card:[
      {
        title: "[Offers] Book A Stay With Agency Id",
        value: "offers.card.book-a-stay-with-agency-id",
      },
      {
        title: "[Offers] Book A Stay With Packages",
        value: "offers.card.book-a-stay-with-packages",
      },
      {
        title: "[Offers] Book A Stay With Coupon",
        value: "offers.card.book-a-stay-with-coupon",
      },
      {
        title: "[Offers] Book A Stay With Access Code",
        value: "offers.card.book-a-stay-with-access-code",
      },
      {
        title:"[Offers] Vertical Aligned Diamond Points",
        value:"offers.card.vertical-aligned-diamond-points"
      },
      {
        title: "[Offers] Book A Stay With Aspect ratio 1:2",
        value: "offers.card-book-a-stay-with-aspect-ratio-1:2",
      },
    ]
  },
};
