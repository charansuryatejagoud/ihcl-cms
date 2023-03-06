import { FeatureSchemaDefinition } from "schemas/types";

export const Authentication: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title: "[Authentication] Maps with Aspect Ratio (6:6)",
        value: "authentication.group.maps-with-aspect-ratio-6:6",
      },
    ],
    card: [
      {
        title: "[Authentication] Card Membership Login Form",
        value: "authentication.card.membership-login-form",
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
        title: "[Authentication] Fields with Actions",
        value: "authentication.nudge.fields-with-actions",
      },
    ],
    dialog: [],
    tabs: [
      {
        title: "[Authentication] SSO Multiple Tabs",
        value: "authentication.sso-multiple-tabs",
      },
    ],
  },
};
