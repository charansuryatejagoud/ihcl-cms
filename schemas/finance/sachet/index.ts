import { FeatureSchemaDefinition } from "../types";
export const sachet: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [
    {title: "[Sachet] Plan Store", value: "finance.sachet.planStore"},
    {title: "[Sachet] Policy Store", value: "finance.sachet.policyStore"}
  ],
  headers: [],
  footers: [],
  schemas: [],
  groupItems: [],
  variants: {
    navigation: [
      {
        title: "[Sachet] App Bar with three dots",
        value: "fs.insurance.appbar.threeDots",
      },
      {
        title: "[Sachet] App Bar with custom background",
        value: "fs.insurance.appbar.custom.background",
      },
    ],
    card: [
      {
        title: "[Sachet] Card with Chevron",
        value: "fs.insurance.card.contentWithChevron",
      },
      {
        title: "[Sachet] ImageView-GIFSupported",
        value: "fs.insurance.card.gif",
      },
      {
        title: "[Sachet] Card with metadata and image",
        value: "fs.insurance.card.descriptionWithImage",
      },
      {
        title: "[Sachet] Claim description with tick",
        value: "fs.insurance.card.metadataWithTick",
      },
      {
        title: "[Sachet] Card With Image",
        value: "fs.insurance.card.cardWithImage",
      },
      {
        title: "[Sachet] Card with content",
        value: "fs.insurance.card.content",
      },
      {
        title: "[Sachet] Card with content with large padding",
        value: "fs.insurance.card.content.padding32",
      },
      {
        title: "[Sachet] Card with content small padding",
        value: "fs.insurance.card.content.padding4",
      },
    ],
    placeholder: [
      {
        title: "[Sachet] Divider",
        value: "fs.insurance.placeholder.divider",
      },
      {
        title: "[Sachet] Plan selection list",
        value: "fs.insurance.placeholder.planSelection",
      },
      {
        title: "[Sachet] Term&Condition Placeholder",
        value: "fs.insurance.placeholder.termsAndCondition",
      },
      {
        title: "[Sachet] Person details Placeholder",
        value: "fs.insurance.placeholder.personDetails",
      },
      {
        title: "[Sachet] Plan details Placeholder",
        value: "fs.insurance.placeholder.planDetails",
      },
      {
        title: "[Sachet] Plan details Placeholder with Switch",
        value: "fs.insurance.placeholder.switch",
      },
      {
        title: "[Sachet] Powered by placeholder",
        value: "fs.insurance.placeholder.poweredBy",
      },
      {
        title: "[Sachet] Description placeholder",
        value: "fs.insurance.placeholder.description",
      },
      {
        title: "[Sachet] Policy details Placeholder",
        value: "fs.insurance.placeholder.policyDetails",
      },
      {
        title: "[Sachet] Tab selection Placeholder",
        value: "fs.insurance.placeholder.tabSelection",
      },
      {
        title: "[Sachet] Policy download CTA",
        value: "fs.insurance.placeholder.viewPolicy",
      },
      {
        title: "[Sachet] Policy Wording Placeholder",
        value: "fs.insurance.placeholder.policyWording",
      },
      {
        title: "[Sachet] Age Selection Group Placeholder",
        value: "fs.insurance.placeholder.ageSelection",
      },
      {
        title: "[Sachet] Nominee Details Placeholder",
        value: "fs.insurance.placeholder.nomineeDetails",
      },
      {
        title: "[Sachet] PAI Footer",
        value: "fs.insurance.footer.productDescription",
      },
      {
        title: "[Sachet] Personal Details Steps Placeholder",
        value: "fs.insurance.placeholder.stepsPersonal",
      },
      {
        title: "[Sachet] Nominee Details Steps Placeholder",
        value: "fs.insurance.placeholder.stepsNominee",
      },
    ],
    group: [
      {
        title: "[Sachet] Policy Details Group",
        value: "fs.insurance.group.grayRounded.big",
      },
      {
        title: "[Sachet] Group with roundedCorner and gray background",
        value: "fs.insurance.group.grayRound",
      },
      {
        title: "[Sachet] Group with gray background",
        value: "fs.insurance.group.grayBackground",
      },
      {
        title: "[Sachet] Group with horizontal padding",
        value: "fs.insurance.group.padding",
      },
      {
        title: "[Sachet] Auto Carousel",
        value: "fs.insurance.group.autoCarousel",
      },
      {
        title: "[Sachet] Group with background",
        value: "fs.insurance.group.page.background",
      },
      {
        title: "[Sachet] Group with black background",
        value: "fs.insurance.group.black.background",
      },
      {
        title: "[Sachet] Group with transparent background",
        value: "fs.insurance.group.transparent.background",
      },
      {
        title: "[Sachet] Group with light surface background",
        value: "fs.insurance.group.lightSurface.background",
      },
      {
        title: "[Sachet] Group with light surface background and without vertical padding",
        value: "fs.insurance.group.lightSurface.background.withoutVerticalPadding",
      },
    ],
    nudge: [
      {
        title: "[Sachet] Nudge with vertical image and description",
        value: "fs.insurance.nudge.infoIconTile",
      },
      {
        title: "[Sachet] Nudge with Horizontal image and description",
        value: "fs.insurance.nudge.infoIconTile.horizontal",
      },
      {
         title: "[Sachet] Clam Description Nudge",
         value: "fs.insurance.nudge.gradient",
      },
    ],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
