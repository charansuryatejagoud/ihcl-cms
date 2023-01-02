import { FeatureSchemaDefinition } from "../../types";

export const financePayLater: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [
    {
      value: "finance.payLater.schemeSummary.store",
      title: "[Finance Pay Later] Scheme Summary Store",
    },
    {
      value: "finance.payLater.emiScheme.store",
      title: "[Finance Pay Later] EMI Scheme Store",
    },
    {
      value: "finance.bnpl.onboarding",
      title: "[Finance Bnpl] Onboarding",
    },
  ],
  headers: [],
  footers: [{ type: "placeholder" }, { type: "group" }],
  schemas: [],
  groupItems: [],
  variants: {
    card: [
      {
        value: "finance.bnpl.onboarding.limit.card",
        title: "[Finance Bnpl Onboarding] Limit Card",
      },
      {
        value: "finance.bnpl.onboarding.offer.kyc.error.card",
        title: "[Finance Bnpl Onboarding] Offer Kyc Error",
      },
      {
        value: "finance.bnpl.onboarding.know.more.card",
        title: "[Finance Bnpl Onboarding] Know More",
      },
      {
        value: "finance.bnpl.onboarding.customer.consent.card",
        title: "[Finance Bnpl Onboarding] Customer Consent",
      },
    ],
    navigation: [
      {
        title: "Linear ProgressBar at Bottom Appbar",
        value: "linear.progress.appbar",
      },
      {
        title: "Appbar With back and  close icon",
        value: "back.and.close.icon.appbar",
      },
    ],
    placeholder: [
      {
        value: "finance.payLater.schemeSummary",
        title: "[Finance Pay Later] Scheme Summary",
      },
      {
        value: "finance.payLater.scheme.landing",
        title: "[Finance Pay Later] Scheme Landing",
      },
      {
        value: "finance.payLater.emiScheme",
        title: "[Finance Pay Later] EMI Scheme",
      },
      {
        value: "finance.bnpl.onboarding.key.benefits",
        title: "[Finance Bnpl Onboarding] Key Benefits",
      },
      {
        value: "finance.bnpl.onboarding.limit.footer",
        title: "[Finance Bnpl Onboarding] Limit Footer",
      },
      {
        value: "finance.payLater.scheme.otp.widget",
        title: "[Finance Pay Later] EMI Otp screen",
      },
      {
        value: "finance.payLater.scheme.kfs.widget",
        title: "[Finance Pay Later] KFS Webview screen",
      },
    ],
    group: [
      {
        title: "[Finance Bnpl Onboarding] Accordion Group",
        value: "finance.bnpl.onboarding.accordion.group",
      },
    ],
    ifElseBlock: [],
    switchCaseBlock: [
      { title: "[Finance] Bnpl", value: "finance.bnpl.tandc" },
      {
        value: "finance.bnpl.onboarding.page.states",
        title: "[Finance Bnpl Onboarding] Page States",
      },
      {
        value: "finance.bnpl.limit.cases",
        title: "[Finance Bnpl Onboarding] Limit Cases",
      },
      {
        value: "finance.bnpl.onboarding.error.state",
        title: "[Finance Bnpl Onboarding] Error State",
      },
    ],
  },
};
