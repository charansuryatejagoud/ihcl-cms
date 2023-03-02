import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";

export const ihclForms: FeatureSchemaDefinition = {
  variants: {
    group: [
      { title: "[ihclForms] Details Form", value: "ihclforms.details-form" },
      { title: "[ihclForms] Payment Form", value: "ihclforms.payment-form" },
      {
        title: "[ihclForms] Feedback Form",
        value: "ihclforms.group.feedback-form",
      },
      { title: "[ihclForms] Personalize Form", value: "ihclforms.gift-form" },
    ],
    card: [
      {
        title: "[ihclForms] Image with Title",
        value: "ihclforms.card.image-with-title",
      },
    ],
    placeholder: [
      { title: "[ihclForms] Login Form", value: "ihclforms.login-form" },
    ],
    dialog: [
      {
        title: "[ihclForms] Login Form With Multiple Tabs",
        value: "login-form-with-multiple-tabs",
      },
    ],
  },
};
