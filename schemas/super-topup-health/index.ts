import { FeatureSchemaDefinition } from "../types";

export const superTopupHealth: FeatureSchemaDefinition = {
  connectedStores: [
    {
      value: "superTopupHealth.Onboarding.store",
      title: "[Super Topup Health] Onboarding Store",
    },
    {
      value: "superTopupHealth.policyDetails.store",
      title: "[SuperTopUp] Policy Details Store",
    },
    {
      value: "superTopupHealth.orderSuccess.store",
      title: "[SuperTopUp] Order Success Store",

    },
    {
      value: "supertopup.success.policy-details",
      title: "[Supertopup] Success Policy Store",
    },

    {
      value: "superTopupHealth.premium.store",

      title: "[Supertopup] Plan Premium Store",
    },

    {
      value: "superTopupHealth.sumInsured.store",
      title: "[SuperTopUp] Sum Insured Store",
    },
    {
      value: "superTopupHealth.email.store",
      title: "[SuperTopUp] Email Store"
    },
  ],

  variants: {
    navigation: 
    [
    { title: "[SuperTopUp] Appbar", value: "superTopupHealth.appbar" },
    { title: "[SuperTopUp] Appbar with three dot", value: "superTopupHealth.appbar.threeDot" },
    ],
    nudge: [
      { title: "[Supertopup] CustomCard", value: "superTopupHealth.nudge.cardRoundedWithMetadata" },
      {
        title: "[SuperTopUp] Image With Text",

        value: "card.arrow.withoutImage",
      },
      //------------
      {
        title: "[SuperTopUp-health] Carousel Card ",
        value: "superTopupHealth.CardCarousel",
      },
      {
        title: "[SuperTopUp-health] Policy Refrained ",
        value: "superTopupHealth.policyRefrained",
      },
      {
        title: "[SuperTopUp-health] Contact Info",
        value: "superTopupHealth.CancelPolicy.contactInfo",
      },
      {
        title: "[SuperTopUp] Button Large",
        value: "superTopupHealth.button.large",

      },
      {
        title: "[SuperTopUp-health] Change Detail Edit",
        value: "superTopupHealth.changeDetail.edit",
      },
      {
        title: "[SuperTopUp-health] Policy Detail Error",
        value: "superTopupHealth.policyDetail.error",
      },
      {
        title: "[SuperTopUp-health] OnBoarding Error",
        value: "superTopupHealth.onBoarding.error",
      },
      {
        title: "[SuperTopUp-health] Order Failure",
        value: "superTopupHealth.OrderFailure",
      },
      {
        title: "[SuperTopUp] Order Success Error",
        value: "superTopupHealth.orderSuccess.error",
      },
      { title: "[Supertopup] Change policy item Nudge", 
        value: "superTopupHealth.nudge.changePolicy"
      },
      {
        title: "[SuperTopUp] Discovery Footer",
        value: "superTopupHealth.footer"

      },
      {
        title: "[SuperTopUp-health] Accordion Download List",
        value: "superTopupHealth.AccordionDownloadList"
      },
      {
        title: "[SuperTopUp-health] Plan Already Purchased Dialog",
        value:  "superTopupHealth.dialog.myplans.planAlreadyPurchased"
      },
    ],

    card: [
      { title: "[SuperTopUp] Card Rounded with Arrow", value: "card.rounded.arrow" },
      //--------
      {
        title: "[SuperTopUp] Card Configuration",
        value: "superTopupHealth.card.cardRounded",
      },
      {
        title: "[SuperTopUp] Card Rounded Configuration",

        value: "superTopupHealth.superCardRounded",
      },
      {
        title: "[SuperTopUp-health] Block Content",
        value: "superTopupHealth.blockContent"
      },
      {
        title: "[SuperTopUp-health] Accordion Block Content",
        value: "superTopupHealth.AccordionBlockContent"
      },
      {
        title: "[SuperTopUp-health] Accordion Communication List",
        value: "superTopupHealth.AccordionCommunicationList"
      },
      {
        title: "[SuperTopUp-health] Footer Button",
        value: "superTopupHealth.footerButton"
      }

    ],
    group: [

      { title: "[SuperTopUp] List with Divider", value: "list.divider" },
      {
        title: "[SuperTopUp] Auto Carousel",
        value: "superTopupHealth.carousel.auto.indicator.bottom",
      },
      {
        title: "[SuperTopUp] Carousel",
        value: "superTopupHealth.carousel.orderSuccess",
      },
      {
        title: "[SuperTopUp]: FAQ",
        value: "superTopupHealth.faq",
      },
      {
        title: "[SuperTopUp] Change Policy Details",
        value: "superTopupHealth.group.policyDetailsUpdates",
      },

      {
        title: "[SuperTopUp-health] Vertical List",
        value: "superTopupHealth.VerticalList",
      },
      {
        title: "[SuperTopUp-health] Group Accordion Drawer",
        value: "superTopupHealth.GroupAccordionDrawer",
      },
      {
        title: "[SuperTopUp-health] Simple Slider",
        value: "superTopupHealth.SimpleSlider",
      },
      {

        title: "[SuperTopUp] Stp Carousel",
        value: "superTopupHealth.carousel.stp",

      },
      {
        title: "[SuperTopUp-health] Stp TNC",
        value: "superTopupHealth.termsandconditions",
      },
      {
        title: "[SuperTopUp-health] Stp Pre Existing Illness",
        value: "superTopupHealth.preexistingillness",
      },
      {
        title: "[SuperTopUp-health] How super topup works",
        value: "superTopupHealth.HowSuperTopupWorks",
      },
      {
        title: "[SuperTopUp-health] Content Group",
        value: "superTopupHealth.ContentGroup",
      },
      {
        title: "[SuperTopUp-health] How deductible works",
        value: "superTopupHealth.howdeductibleworks",
      },
      {

        title: "[SuperTopUp] Policy Selection",
        value: "superTopupHealth.policy.selection",

      },
      {
        title: "[SuperTopUp-health] Form Group",
        value: "superTopupHealth.FormGroup",
      },
      {
        title: "[SuperTopUp-health] Deductible Selection",
        value: "superTopupHealth.deductibleSelection",
      },
      {
        title: "[SuperTopUp-health] Text Group",
        value: "superTopupHealth.TextGroup",
      },
      {
        title: "[SuperTopUp-health] Sum Insured Selection",
        value: "superTopupHealth.SumInsuredSelection",
      },
      {
        title: "[SuperTopUp-health] Good health declaration",
        value: "superTopupHealth.goodhealthdeclaration",
      },
      {
        title: "[SuperTopUp-health] CheckBox Group",
        value: "superTopupHealth.CheckBoxGroup",
      },
      {
        title: "[SuperTopUp-health] Accordion Group",
        value: "superTopupHealth.AccordionGroup",
      },
      {
        title: "[SuperTopUp-health] Accordion List Group",
        value: "superTopupHealth.AccordionListGroup",
      },
      {
        title: "[SuperTopUp-health] Accordion Grid Group",
        value: "superTopupHealth.AccordionGridGroup",
      },
      {
        title: "[SuperTopUp-health] Tabs Group",
        value: "superTopupHealth.TabsGroup",
      },
      {
        title: "[SuperTopUp-health] Faqs Group",
        value: "superTopupHealth.FaqsGroup",
      },
      {
        title: "[Super Topup Health] Change Detail Wrapper",
        value: "superTopupHealth.changeDetail.wrapper",
      },
      {
        title: "[Super Topup Health] How to claim",
        value: "superTopupHealth.policyDetail.htc",
      },
      {
        title: "[Super Topup Health] Tabs",
        value: "superTopupHealth.insurerContact",
      },
      {

        title: "[SuperTopUp] Whats Covered",
        value: "superTopupHealth.group.whatsCoveredDiscovery",
      },
      {
        title: "[SuperTopUp] Insurer Contact Details",

        value: "superTopupHealth.insurer.contacts",
      },
    ],
    placeholder: [
      {

        title: "[SuperTopUp] Section 1 ",
        value: "superTopupHealth.section1",
      },
      {
        title: "[SuperTopUp] Section 2",
        value: "supertopup.section2",
      },
      {
        title: "[SuperTopUp] Top Header",
        value: "superTopupHealth.super.text",

      },
      {
        title: "[Super TopUp Health] Onboarding Personal Detail",
        value: "superTopupHealth.Onboarding.personalDetail",
      },
      {
        title: "[Super TopUp Health] Super Header",
        value: "superTopupHealth.superHeader",
      },
      {
        title: "[Super TopUp Health] Group Footer",
        value: "superTopupHealth.footer",
      },
      {
        title: "[SuperTopUp] Text Content",
        value: "superTopupHealth.textContent",

      },
      {
        title: "[Super TopUp Health] List Content",
        value: "superTopupHealth.ListContent",
      },
      {
        title: "[SuperTopUp] Age Group",
        value: "superTopupHealth.age.group",

      },
      {
        title: "[SuperTopUp-health] Edit Plan Selection",
        value: "superTopupHealth.EditPlanSelection",
      },
      {
        title: "[SuperTopUp] Select Deductible",
        value: "superTopupHealth.select.deductible",

      },
      {
        title: "[SuperTopUp-health] Edit Deductible Selection",
        value: "superTopupHealth.EditDeductibleSelection",
      },
      {
        title: "[SuperTopUp] Select Sum Insured",
        value: "superTopupHealth.select.sumInsured",

      },
      {
        title: "[SuperTopUp-health] Ghd Placeholder",
        value: "superTopupHealth.GhdPlaceholder",
      },
      {
        title: "[SuperTopUp-health] Ghd Options",
        value: "superTopupHealth.GhdOptions",
      },
      {
        title: "[Super Topup Health] AccordionList",
        value: "superTopupHealth.AccordionList",
      },
      {
        title: "[Super Topup Health] Faqs",
        value: "superTopupHealth.Faqs",
      },
      {
        title: "[Super TopUp Health] Onboarding Family Detail",
        value: "superTopupHealth.Onboarding.familyDetail",
      },
      {

        title: "[SuperTopUp] Order Success Header",
        value: "superTopupHealth.orderSuccess.header",
      },
      {
        title: "[SuperTopUp] Order Success Download Policy",
        value: "superTopupHealth.orderSuccess.downloadPolicy",
      },
      {
        title: "[SuperTopUp] Order Success Details",
        value: "superTopupHealth.orderSuccess.details",
      },
      {
        title: "[SuperTopUp] Order Success Share",
        value: "superTopupHealth.orderSuccess.share",
      },
      {
        title: "[SuperTopUp] Order Success Summary",
        value: "superTopupHealth.orderSuccess.summary",
      },
      {
        title: "[SuperTopUp] Order Success Payment",
        value: "superTopupHealth.orderSuccess.payment",
      },
      ,
      {
        title: "[SuperTopUp] Policy Detail Claim",
        value: "superTopupHealth.policyDetail.claim",
      },
      {
        title: "[SuperTopUp] Policy Detail Summary",
        value: "superTopupHealth.policyDetail.summary",
      },
      {
        title: "[SuperTopUp] Policy Detail Holder",
        value: "superTopupHealth.policyDetail.holder",
      },
      {
        title: "[SuperTopup] Policy Detail CTAs",

        value: "superTopupHealth.policyDetail.ctas",
      },
      {
        title: "[Super Topup Health] Policy Detail Header",
        value: "superTopupHealth.policyDetail.header",
      },
      {
        title: "[Super Topup Health] Cancel Policy",
        value: "superTopupHealth.cancelPolicy.detail",
      },
      {
        title: "[Super Topup Health] Cancel Policy Info",
        value: "superTopupHealth.cancelPolicy.info",
      },

      {
        title: "[Super Topup Health] Onboarding Cancel Feedback",
        value: "superTopupHealth.onBoarding.cancelFeedback",
      },
      {
        title: "[Super TopUp Health] Nominee Form",
        value: "superTopupHealth.changeDetail.nomineeForm",
      },
      {
        title: "[Super TopUp Health] Address Form",
        value: "superTopupHealth.changeDetail.addressForm",
      },
      {
        title: "[Super TopUp Health] Email Form",
        value: "superTopupHealth.changeDetail.emailForm",
      },
      {
        title: "[SuperTopUp] Bottom Menu",

        value: "superTopupHealth.bottom.menu",
      },
      {
        title: "[SuperTopUp-health] Accordion Download Footer",
        value: "superTopupHealth.AccordionFooter"
      }
,
      {
        title: "[SuperTopUp] Personal Details",
        value: "superTopupHealth.personalDetail.form"
      } 
      ,
      {
        title: "[SuperTopUp] Cancel Policy Header",
        value: "superTopupHealth.header.cancel.policy"
      } 
      ,
      {
        title: "[SuperTopUp] Add Family",
        value: "superTopupHealth.onboarding.addFamily"
      } 
      
    ],

  },
  footers: [{
    type: "card",
  }],
  schemas: [
  ],
};
