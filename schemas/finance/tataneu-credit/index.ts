import { FeatureSchemaDefinition } from "../../types";

export const tataNeuCredit: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [],
  headers: [],
  footers: [],
  schemas: [],
  groupItems: [],
  variants: {
    card: [
      {
        title: "[Finance TataNeuCredit] Product card",
        value: "tataneucredit.product.card",
      },
    ],
    nudge: [
      {
        title: "[Finance TataNeuCredit] Powered By",
        value: "tataneucredit.poweredBy",
      },
    ],
    navigation: [
      {
        title: "[Finance TataNeuCredit] Homepage Appbar",
        value: "tataneucredit.appbar",
      },
    ],
    placeholder: [
      {
        title: "[Finance TataNeuCredit] Homepage",
        value: "tataneucredit.homepage",
      },
    ],
    group: [
      {
        title: "[Finance TataNeuCredit] Product List",
        value: "tataneucredit.products",
      },
      {
        title: "[Finance TataNeuCredit] Our Partners",
        value: "tataneucredit.partners.carousel",
      },
    ],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
