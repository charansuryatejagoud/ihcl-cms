import { FeatureSchemaDefinition } from "schemas/types";

export const Authentication: FeatureSchemaDefinition = {
  connectedStores: [
    {
      title: "[Authentication] Login Store",
      value: "authentication.login-store",
    },
  ],
  variants: {
    group: [
      {
        title: "[Authentication] Maps with Aspect Ratio (6:6)",
        value: "authentication.group.maps-with-aspect-ratio-6:6",
      },
    ],
    card: [
      {
        title: "[Authentication] Membership Login Form",
        value: "authentication.card.membership-login-form",
      },
      {
        title: "[Authentication] Mobile Number Login Form",
        value: "authentication.card.mobile-number-login-form",
      },
      {
        title: "[Authentication] Email Address Login Form",
        value: "authentication.card.email-address-login-form",
      },
      {
        title: "[Authentication] Image with Title",
        value: "authentication.card.image-with-title",
      },
      {
        title: "[Authentication] OTP fields",
        value: "authentication.card.otp-fields",
      },
      {
        title: "[Authentication] Action Labels",
        value: "authentication.card.action-labels",
      },
    ],
    nudge: [
      {
        title: "[Authentication] Details Form",
        value: "authentication.nudge.details-form",
      },
      {
        title: "[Authentication] Address Form",
        value: "authentication.nudge.address-form",
      },
      {
        title: "[Authentication] Membership Login Options",
        value: "authentication.nudge.membership-login-options",
      },
    ],
    dialog: [
      {
        title: "[Authentication] Global Register User Details",
        value: "authentication.dialog.global-register-user-details",
      },
      {
        title: "[Authentication] On Successfull Global registration",
        value: "authentication.dialog.on-successfull-global-registration",
      },
    ],
    tabs: [
      {
        title: "[Authentication] SSO Multiple Tabs",
        value: "authentication.sso-multiple-tabs",
      },
      {
        title: "[Authentication] Address Tabs",
        value: "authentication.tabs.address-tabs",
      },
    ],
    placeholder: [
      {
        title: "[Authentication] Mobile Number Verification",
        value: "authentication.mobile-number-verification",
      },
    ],
  },
};
