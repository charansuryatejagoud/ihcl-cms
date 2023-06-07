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
  },
};
