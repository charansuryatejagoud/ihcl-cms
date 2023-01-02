import { FeatureSchemaDefinition } from "../../types";

export const financeLoanVault: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [
    {
      value: "finance.loanVault.store",
      title: "[Finance Loan Vault] Loan Vault Store",
    },
  ],
  headers: [],
  footers: [],
  schemas: [],
  groupItems: [],
  variants: {
    navigation: [],
    card: [],
    placeholder: [
      {
        value: "finance.loanVault",
        title: "[Finance Loan Vault] Loan Vault",
      },
    ],
    group: [],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
