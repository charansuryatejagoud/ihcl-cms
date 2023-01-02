import { FeatureSchemaDefinition } from "../types";

export const hamburger_menu: FeatureSchemaDefinition = {
  variants: {
    placeholder: [
      {
        title: "[Hamburger Menu] Update Password PlaceHolder",
        value: "update.password.placeholder",
      },
      {
        title: "[Hamburger Menu] Set Password PlaceHolder",
        value: "set.password.placeholder",
      },
      {
        title: "[Hamburger Menu] My Profile Title PlaceHolder",
        value: "profile.title",
      },
      {
        title: "[Hamburger Menu] My Profile Date Of Birth PlaceHolder",
        value: "profile.dateOfBirth",
      },
      {
        title: "[Hamburger Menu] My Profile Date Of Anniversary PlaceHolder",
        value: "profile.dateOfAnniversary",
      },
      {
        title: "[Hamburger Menu] My Profile Mobile Number PlaceHolder",
        value: "profile.mobileNumber",
      },
      {
        title: "[Hamburger Menu] My Profile Primary Email PlaceHolder",
        value: "profile.primary.email",
      },

      {
        title: "[Hamburger Menu] My Profile Corporate Email PlaceHolder",
        value: "profile.corporate.email",
      },
      {
        title: "[Hamburger Menu] My Profile Update Profile Action PlaceHolder",
        value: "profile.update.action",
      },
      {
        title: "[Hamburger Menu] Verify Email PlaceHolder",
        value: "quick.verify.email",
      },
      {
        title: "[Hamburger Menu] Verify Phone PlaceHolder",
        value: "quick.verify.mobile",
      },
    ],
    group: [],
    ifElseBlock: [
      {
        title: "[Hamburger Menu] Password Status",
        value: "password-status",
      },
    ],
  },
  connectedStores: [
    { title: "[Hamburger Menu] Password Store", value: "password.store" },
    {
      title: "[Hamburger Menu] My Profile Store",
      value: "hamburger.profile.store",
    },
  ],
};
