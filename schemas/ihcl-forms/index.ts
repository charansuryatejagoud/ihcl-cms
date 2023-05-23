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
    card: [],
    placeholder: [
      { title: "[IHCL Forms] Login Form", value: "ihclforms.login-form" },
    ],
    dialog: [
      {
        title: "[IHCL Forms] Login Form With Multiple Tabs",
        value: "login-form-with-multiple-tabs",
      },
    ],
    forms: [
      {
        title: "[IHCL Forms] Khazana Enquiry",
        value: "ihclForms.khazana-enquiry-form",
      },
      {
        title: "[IHCL Forms] Hamper Products Enquiry",
        value: "ihclForms.hamper-product-enquiry-form",
      },
      {
        title: "[IHCL Forms] TAP Enquiry",
        value: "ihclForms.tap-enquiry-form",
      },
      {
        title: "[IHCL Forms] TAPPME Enquiry",
        value: "ihclForms.tappme-enquiry-form",
      },
      {
        title: "[IHCL Forms] Asya Enquiry",
        value: "ihclForms.asya-enquiry-form",
      },
    ],
  },
};
