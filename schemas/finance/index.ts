import { FeatureSchemaDefinition } from "../types";
import factorAffecting from "./credit-score/factorAffecting";
import impactList from "./credit-score/impactList";
import plans from "./fs-slp";
import termsHeader from "./aia-pdp/termsHeader";
import pdpFooter from "./aia-pdp/pdpFooter";
import creditReportSuccess from "./fs-slp/creditReportSuccess";

export const finance: FeatureSchemaDefinition = {
  pageItems: [
    { type: "creditScore.factorAffecting" },
    { type: "finance.slp.credit-report-success" }
  ],
  connectedStores: [
    {
      value: "finance.policy.store",
      title: "[Finance] Policy Store",
    },
    {
      value: "finance.policyDetails.store",
      title: "[Finance] Policy Details Store",
    },
    {
      value: "finance.credit.report.store",
      title: "[Credit Report] Credit Report Store",
    },
    {
      value: "aia.userConsent.store",
      title: "[AIA PDP] User Consent Store",
    },
    {
      value: "finance.slp.store",
      title: "[Finance SLP] Finance SLP Store",
    },
    {
      value: "finance.slp.consent.store",
      title: "[Finance SLP] Finance SLP Consent Store",
    },
    {
      title: "[Finance] PL Marketplace Store",
      value: "finance.pl.marketplace.store",
     },
  ],
  headers: [
    { type: "aiaPdp.tncHeader" },
    {
      type: "card",
    },
  ],
  footers: [{ type: "aiaPdp.footer" }],
  schemas: [factorAffecting, impactList, termsHeader, pdpFooter, plans, creditReportSuccess],
  groupItems: [],
  variants: {
    navigation: [],
    card: [
       {
         title: "[Finance] Cancel Button",
         value: "finance.card.cancelButton",
       },
      {
        title: "[Credit Report] Scenario Status Card",
        value: "credit.report.scenario.status.card",
      },
      {
        title: "Bnpl scenario-status card",
        value: "bnpl.scenario.status.card",
      },
      {
        title: "[Credit Report] Build Score Card",
        value: "credit.build.score.card",
      },
      {
        title: "[Credit Report] Build Score Footer",
        value: "credit.build.score.footer.card",
      },
      {

        title: "[PL Marketplace] Card bottom title",
        value: "finance.pl.marketplace.card.with.bottom.title",
      },
      {
        title: "[PL Marketplace] Benefits",
        value: "finance.pl.marketplace.benefits",
      },
      {
        title: "[PL Marketplace] Footer",
        value: "finance.pl.marketplace.footer",
      },
      {
        title: "[PL Marketplace] Pre-Approved Offers",
        value: "finance.pl.marketplace.pre.approved",
      },
      {
        title: "[PL Marketplace] No Approved Offers",
        value: "finance.pl.marketplace.not.approved.offers",
      },
      {
        title: "[PL Marketplace] MultiLoan New Application",
        value: "finance.pl.marketplace.multiloan.new.application",
      },
      {
        title: "[PL Marketplace] MultiLoan Saved Application",
        value: "finance.pl.marketplace.multiloan.saved.application",
      },
      {
        title: "[PL Marketplace] MultiLoan Rejected Application",
        value: "finance.pl.marketplace.multiloan.rejected.application",
      },

      {
        title: "[Credit Report] Fetch My Report & TnC",
        value: "credit.report.fetch.tnc.card",
      },
      {
        title: "[Credit Report] Headers",
        value: "credit.report.header.card",
      },
      {
        title: "[FS SLP] Credit Report Failed",
        value: "finance.slp.credit-report-failed",
      },
      {
        title: "[FS SLP] Credit Report Null",
        value: "finance.slp.credit-report-null",
      },
    ],
    placeholder: [
      {
        title: "[Finance] No Refund Text Placeholder",
        value: "finance.placeholder.noRefundText",
      },
      {
        title: "[Finance] Cancel Step2",
        value: "finance.placeholder.cancelStep2",
      },
      {
        value: "finance.insuranceList",
        title: "[Finance] Insurance List",
      },
      {
        value: "finance.policyDetails",
        title: "[Finance] PolicyDetails",
      },
      {
        value: "credit.report.input.fields",
        title: "[Credit Report] Input Fields",
      },
      {
         value: "finance.slp.header-action-item",
         title: "[Finance SLP] Header Action Item",
       },
      {
        title: "[PL Marketplace] Powered By lenders logos",
        value: "finance.pl.marketplace.powered-by",
        
      },
      {
        title: "[PL MultiLoan] My Loans Card",
        value:"finance.pl.marketplace.my-multiloan.loans.card",
      }
    ],
    group: [
      {
        value: "aia.autoCarousel-with-padding",
        title: "[AIA PDP] Auto Carousel With Padding",
      },
      {
        value: "list.vertical.rounded-corner",
        title: "[AIA PDP] Vertical List With Rounded Corners",
      },
      {
        value: "aia.page-wrapper-width464",
        title: "[AIA PDP] Page Wrapper Width 464 ",
      },
      {
        value: "credit.score.tnc",
        title: "[Credit Score] Terms and Conditions",
      },
      {
        value: "credit.score.build.score",
        title: "[Credit Score] Build scores",
      },
      {
        value: "vertical.list.without.divider",
        title: "Vertical List Without Divider",
      },
      {
        value: "finance.slp.product.segment",
        title: "[Finance SLP] Product Segment",
      },
    ],
    nudge: [
      {
        value: "aia.pdp-header-action-item",
        title: "[AIA PDP] Header Action Item",
      },
      {
        value: "pdp-items-with-image-title",
        title: "[AIA PDP] Items With Image Title",
      },
      {
        value: "aia.pdp-footer-action-items",
        title: "[AIA PDP] Footer Action Items",
      },
      {
        value: "terms&Conditions",
        title: "T&C with Cross Image Title",
      },
      {
        value: "rounded-corners-with-title",
        title: "[AIA PDP Dialog] Rounded Corners with Title",
      },
      {
        value: "finance.slp.consent-content",
        title: "[Finance SLP] Consent Content",
      },
      {
        title: "[FS SLP] slp cards",
        value: "finance.slp.cards",
      },
      {
        title: "[Finance] Plan cancellation",
        value: "finance.nudge.planCancellation",
      },
      {
        title: "[Finance] Plan cancellation confirmations",
        value: "finance.nudge.planCancellation.confirmation",
      },
    ],
    ifElseBlock: [
      {
        title: "[AIA PDP] Is TATA Employee",
        value: "aia.pdp.tata-employee",
      },
      {
        title: "[Finance SLP] Product Segment LD Check",
        value: "finance.slp.product-segment-LD-check",
      },
      {
        title: "[Finance SLP] Product Segment Child LD Check",
        value: "finance.slp.product-segment-child-LD-check",
      },
      {
        title: "[PL MarketPlace] Powered By",
        value:"finance.pl.marketplace.loan.powered-by",
      },
      {
        title: "[PL MultiLoan] My Loans Card",
        value:"finance.pl.marketplace.multiloan.loans.card",
      },
    ],
    switchCaseBlock: [
      {
        title: "[Credit Report] Scenario Status",
        value: "credit.report.scenario.status",
      },
      {
        title: "Bnpl scenario status",
        value: "bnpl.scenario.status",
      },
      {
        title: "[AIA PDP] item dialog",
        value: "aia.item-dialog",
      },
      {
        title: "[FS SLP] Credit Report Status",
        value: "finance.slp.credit-report-status",
       },
      {
        title: "[PL Marketplace] Loan Offers",
        value: "finance.pl.marketplace.loan.offers",
      },
      {
        title: "[PL Marketplace] MultiLoan Offers",
        value: "finance.pl.marketplace.multiloan.offers",
      },
    ],
  },
};
