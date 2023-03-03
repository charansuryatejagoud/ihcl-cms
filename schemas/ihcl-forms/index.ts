import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";

export const ihclForms: FeatureSchemaDefinition = {
  variants: {
    group: [
      { title: "[IHCL Forms] Details Form", value: "ihclforms.details-form" },
      { title: "[IHCL Forms] Payment Form", value: "ihclforms.payment-form" },
      {
        title: "[IHCL Forms] Feedback Form",
        value: "ihclforms.group.feedback-form",
      },
      { title: "[IHCL Forms] Personalize Form", value: "ihclforms.gift-form" },
    ],
    card: [
      {
        title: "[IHCL Forms] Image with Title",
        value: "ihclforms.card.image-with-title",
      },
      {
        title: "[IHCL Forms] Card Membership Login Form",
        value: "ihclforms.card.membership-login-form",
      },
    ],
    placeholder: [
      { title: "[IHCL Forms] Login Form", value: "ihclforms.login-form" },
    ],
    dialog: [
      {
        title: "[IHCL Forms] Login Form With Multiple Tabs",
        value: "login-form-with-multiple-tabs",
      },
    ],
    tabs: [
      {
        title: "[IHCL Forms] SSO Multiple Tabs",
        value: "ihclforms.sso-multiple-tabs",
      },
    ],
  },
};
