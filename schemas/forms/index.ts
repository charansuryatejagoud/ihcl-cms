import dialog from "schemas/core/documents/dialog";
import { FeatureSchemaDefinition } from "schemas/types";

export const ihclForms: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title: "[IHCL Forms] Details Form",
        value: "ihclForms.group.details-form",
      },
      {
        title: "[IHCL Forms] Payment Form",
        value: "ihclForms.group.payment-form",
      },
      {
        title: "[IHCL Forms] Feedback Form",
        value: "ihclForms.group.feedback-form",
      },
      { title: "[IHCL Forms] Gift Form", value: "ihclForms.group.gift-form" },
      {
        title: "[IHCL Forms] Table Reservation",
        value: "ihclForms.group.table-reservation",
      },
      {
        title: "[IHCL Forms] Gift Form With Neucoins Redemption",
        value: "ihclForms.group.gift-form-neucoins-redemption",
      },
    ],
    card: [
      {
        title: "[IHCL Forms] Description with CTA",
        value: "ihclForms.card.description-with-cta",
      },
    ],
    placeholder: [
      {
        title: "[IHCL Forms] Login Form",
        value: "ihclForms.placeholders.login-form",
      },
    ],
    dialog: [
      {
        title: "[IHCL Forms] Login Form With Multiple Tabs",
        value: "login-form-with-multiple-tabs",
      },
    ],
    tabs: [
      {
        title: "[IHCL Forms] Contact Form",
        value: "ihclForms.tabs.contact-form",
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
      {
        title: "[IHCL Forms] Dining Enquiry",
        value: "ihclForms.dining-enquiry",
      },
      {
        title: "[IHCL Forms] Contact Form Tabs",
        value: "ihclForms.contact-form-tabs",
      },
      {
        title: "[IHCL Forms] Holidays Enquiry",
        value: "ihclForms.holidays-enquiry",
      },
      {
        title: "[IHCL Forms] Contact Details",
        value: "ihclForms.contact-details",
      },
      {
        title: "[IHCL Forms] Wedding Enquiry",
        value: "ihclForms.wedding-enquiry",
      },
      {
        title: "[IHCL Forms] Wedding Event Enquiry",
        value: "ihclForms.wedding-event-enquiry",
      },
      {
        title: "[IHCL Forms] Wellness Enquiry Modal",
        value: "ihclForms.wellness-enquiry-modal",
      },
      {
        title: "[IHCL Forms] Experiences Enquiry Modal",
        value: "ihclForms.experiences-enquiry-modal",
      },
      {
        title: "[IHCL Forms] Venue Enquiry Modal",
        value: "ihclForms.venue-enquiry-modal",
      },
      {
        title: "[IHCL Forms] Dining Plan An Event Enquiry",
        value: "ihclForms.dining-plan-an-event-enquiry",
      },
      {
        title: "[IHCL Forms] Contact Suggestions",
        value: "ihclForms.contact-suggestions",
      },
      {
        title: "[IHCL Forms] Safari Enquiry Form ",
        value: "ihclForms.safari-enquiry-form",
      }
    ],
  },
};
