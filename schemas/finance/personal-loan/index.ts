import { FeatureSchemaDefinition } from "../../types";

export const financePersonalLoan: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [
    {
      value: "finance.personalLoan.loanDetails.store",
      title: "[Finance Personal Loan] Loan Details Store",
    },
    {
      value: "finance.personalLoan.rejection.store",
      title: "[Finance Personal Loan] Rejection Details Store",
    },
  ],
  headers: [],
  footers: [],
  schemas: [],
  groupItems: [],
  variants: {
    navigation: [],
    card: [
      {
        value: "finance.personalLoan.rejectionTitle",
        title: "[Finance Personal Loan] Loan Rejection Title",
      },
      {
        value: "finance.personalLoan.checkCreditReport",
        title: "[Finance Personal Loan] Check Credit Report",
      },
      {
        value: "finance.personalLoan.reasonDescription",
        title: "[Finance Personal Loan] Rejection Reason Description",
      },
      {
        value: "finance.personalLoan.reasonFooter",
        title: "[Finance Personal Loan] Reason Footer",
      },
    ],
    placeholder: [
      {
        value: "finance.personalLoan.loanDetails",
        title: "[Finance Personal Loan] Loan Details",
      },
    ],
    group: [
      {
        value: "finance.personalLoan.rejectionReason",
        title: "[Finance Personal Loan] Loan Rejection Reason",
      },
    ],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
