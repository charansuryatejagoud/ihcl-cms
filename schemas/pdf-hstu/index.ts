import { FeatureSchemaDefinition } from "../types";
import PolicyDetailHeader from "./policyDetailHeader";
import PolicyDetailFooter from "./policyDetailFooter";
import HeaderFooter from "./headerFooter";

export const hstuDefinition: FeatureSchemaDefinition = {
  headers: [{ type: "hstu.header.policy-detail" }],
  footers: [{ type: "hstu.footer.policy-detail" }],
  schemas: [PolicyDetailHeader, PolicyDetailFooter, HeaderFooter],
  variants: {
    group: [
      { title: "[HSTU PDF] Default group", value: "pdf.hstu.default" },
      {
        title: "[HSTU PDF] Cover header",
        value: "pdf.hstu.cover-header",
      },
      {
        title: "[HSTU PDF] Cover footer",
        value: "pdf.hstu.cover-footer",
      },
      {
        title: "[HSTU PDF] Violet title",
        value: "pdf.hstu.violet-title",
      },
      {
        title: "[HSTU PDF] [6*6] Two item grid",
        value: "pdf.hstu.grid-two-item",
      },
      {
        title: "[HSTU PDF] Blue title",
        value: "pdf.hstu.blue-title",
      },
      {
        title: "[HSTU PDF] Split layout",
        value: "pdf.hstu.split-layout",
      },
      {
        title: "[HSTU PDF] Bordered Box",
        value: "pdf.hstu.bordered-group",
      },
      {
        title: "[HSTU PDF] Blue title small",
        value: "pdf.hstu.blue-title-small",
      },
      {
        title: "[HSTU PDF] E-Card Wrapper",
        value: "pdf.hstu.e-card-wrapper",
      },
    ],
    card: [
      {
        title: "[HSTU PDF] Policy info item",
        value: "pdf.hstu.policy-info-item",
      },
      {
        title: "[HSTU PDF] Insurer card logo",
        value: "pdf.hstu.insurer-logo-card",
      },
      {
        title: "[HSTU PDF] Page title",
        value: "pdf.hstu.page-title",
      },
      {
        title: "[HSTU PDF] E Card Header",
        value: "pdf.hstu.e-card-header",
      },
      {
        title: "[HSTU PDF] E Card Footer",
        value: "pdf.hstu.e-card-footer",
      },
      {
        title: "[HSTU PDF] Section title",
        value: "pdf.hstu.section-title",
      },
      {
        title: "[HSTU PDF] Signature image",
        value: "pdf.hstu.signature-image",
      },
      {
        title: "[HSTU PDF] Summary page footer text",
        value: "pdf.hstu.summary-page-footer",
      },
    ],
    placeholder: [
      {
        title: "[HSTU PDF] Data Header Box",
        value: "pdf.hstu.data-header-box",
      },
      {
        title: "[HSTU PDF] E Card detail",
        value: "pdf.hstu.e-card-detail",
      },
      {
        title: "[HSTU PDF] Enrollment form URN",
        value: "pdf.hstu.enrollment-form-urn",
      },
      {
        title: "[HSTU PDF] Enrollment detail form",
        value: "pdf.hstu.detail-form",
      },
      {
        title: "[HSTU PDF] Pdf page break",
        value: "pdf.hstu.pdf-page-break",
      },
      {
        title: "[HSTU PDF] Enrollment plan detail",
        value: "pdf.hstu.enrollment-plan-detial",
      },
      {
        title: "[HSTU PDF] Acknowledgement form",
        value: "pdf.hstu.acknowledgement-form",
      },
    ],
    dataGrid: [
      {
        title: "[HSTU PDF] Summary Grid",
        value: "pdf.hstu.summary-grid",
      },
    ],
  },
};
