import { FeatureSchemaDefinition } from "schemas/types";
import membershipLogin from "./membershipLogin";

export const Authentication: FeatureSchemaDefinition = {
  schemas: [
    membershipLogin
  ],
  headers: [
    {
      type: "dialogHeader",
    },
  ],
  connectedStores: [
    {
      title: "[Authentication] Login Store",
      value: "authentication.login-store",
    },
    {
      title: "[Authentication] Neupass Global User Registration Details",
      value: "authentication.neupass-global-user-registration-details",
    },
    {
      title: "[Authentication] Register Store",
      value: "authentication.stores.register-store",
    },
  ],
  customItems: [
    {
      type: "membershipLogin" 
    }
  ],
  variants: {
    group: [
      {
        title: "[Authentication] Maps with Aspect Ratio (6:6)",
        value: "authentication.group.maps-with-aspect-ratio-6:6",
      },
      {
        title: "[Authentication] Grey Grid",
        value: "authentication.group.grey-grid",
      },
      {
        title: "[Authentication] Membership Carousel",
        value: "authentication.group.membership-carousel",
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
        title: "[Authentication] Action Labels",
        value: "authentication.card.action-labels",
      },
      {
        title: "[Authentication] Membership Global Login options",
        value: "authentication.card.membership-global-login-options",
      },
      {
        title: "[Authentication] Reset Password",
        value: "authentication.card.reset-password",
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
      {
        title: "[Authentication] Alert Message",
        value: "authentication.nudge.alert-message",
      },
    ],
    dialog: [
      {
        title: "[Authentication] Global Register User Details",
        value: "authentication.dialog.global-register-user-details",
      },
      {
        title: "[Authentication] On Successful Global registration",
        value: "authentication.dialog.on-successful-global-registration",
      },
      {
        title: "[Authentication] Mobile Number Registration",
        value: "authentication.dialog.mobile-number-registration",
      },
      {
        title: "[Authentication] OTP Login Model",
        value: "authentication.dialog.otp-login-model",
      },
      {
        title: "[Authentication] Global Membership Login",
        value: "authentication.dialog.global-membership-login",
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
    authentication: [
      {
        title: "[Authentication] Mobile Number Verification",
        value: "authentication.mobile-number-verification",
      },
    ],
  },
};
