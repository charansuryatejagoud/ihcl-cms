import creditcardForm from "./form";
import inputObject from "./inputObject";
import mapObject from "./mapObject";
import { FeatureSchemaDefinition } from "../../types";

export const creditcard: FeatureSchemaDefinition = {
  pageItems: [{ type: "creditcard.form" }],
  schemas: [creditcardForm, inputObject, mapObject],
  connectedStores: [
    {
      value: "creditCard.store",
      title: "[CreditCard] Main Store",
    },
  ],
  headers: [],
  footers: [
    {
      type: "ifElseBlock",
    },
    {
      type: "link",
    },
  ],
  variants: {
    navigation: [
      {
        title: "[CreditCard] Back Navigation",
        value: "creditcard.back.navigation",
      },
    ],
    card: [
      {
        title: "[Credit Card] Product Detail card",
        value: "creditcard.product-detail.card",
      },
      {
        title: "[Credit Card] KYC image card",
        value: "creditcard.kyc-image.card",
      },
    ],
    placeholder: [],
    group: [
      {
        value: "creditcard.tabs.group",
        title: "[Credit Card] Tabs group",
      },
      {
        value: "creditcard.gradient.group",
        title: "[Credit Card] Gradient group",
      },
      {
        value: "creditcard.horizontal.center.group",
        title: "[Credit Card] Horizontal Centered group",
      },
    ],
    nudge: [
      {
        title: "[Credit Card] CVP Welcome NueCoins Nudge",
        value: "creditcard.cvp.welcomeNeuCoinsNudge",
      },
      {
        title: "[Credit Card] Timer Exceed Nudge",
        value: "creditcard.ipa.timer-exceed",
      },
      {
        title: "[Credit Card] CVP Lounge Nudge",
        value: "creditcard.cvp.loungeNudge",
      },
      {
        title: "[Credit Card] CVP Joining Fee Nudge",
        value: "creditcard.cvp.joiningFeeNudge",
      },
      {
        title: "[Credit Card] CVP Benefits Nudge",
        value: "creditcard.cvp.benefitsNudge",
      },
      {
        title: "[Credit Card] CVP Discount Nudge",
        value: "creditcard.cvp.discountNudge",
      },
      {
        title: "[Credit Card] Powered By Nudge",
        value: "creditcard.cvp.poweredByNudge",
      },
      {
        title: "[Credit Card] IPA Loader",
        value: "creditcard.ipa.loader",
      },
    ],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
