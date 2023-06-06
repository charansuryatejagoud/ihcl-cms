import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import { featureDefinition } from "./feature-schemas";

import page from "./core/documents/page";
import group from "./core/objects/group";
import layoutPlaceholder from "./core/objects/layoutPlaceholder";
import placeholder from "./core/objects/placeholder";
import card from "./core/objects/card";
import cardLayout from "./core/objects/cardLayout";
import dialog from "./core/documents/dialog";
import nudge from "./core/objects/nudge";
import lockableItem from "./core/objects/lockableItem";
import ifElseBlock from "./core/objects/ifElseBlock";
import { switchCaseBlock } from "./core/objects/switchCaseBlock";
import section from "./core/objects/section";
import dataGrid from "./core/objects/dataGrid";
import { bannerComponents } from "./ihcl/banner";
import { tabs, tab } from "./ihcl/Tabs";
import { contentFragment } from "./ihcl/contentFragment";
import { stepperComponent } from "./ihcl/stepperComponent";
import giftCardsCollection from "./giftCardsCollection";
import { dialogHeader } from "./ihcl/dialogHeader";
import form from "./ihcl/form";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page({
      items: featureDefinition.pageItems,
      connectedStores: featureDefinition.connectedStores,
      navigationVariants: featureDefinition.variants.navigation,
    }),
    dialog({
      connectedStores: featureDefinition.connectedStores,
      headers: featureDefinition.headers,
      footers: featureDefinition.footers,
      variants: featureDefinition.variants.dialog,
      items: featureDefinition.pageItems,
      dialogSize: featureDefinition.dialogSize.dialog,
    }),
    group({
      variants: featureDefinition.variants.group,
      items: featureDefinition.groupItems,
    }),
    layoutPlaceholder({
      variants: featureDefinition.variants.group,
      cardVariants: featureDefinition.variants.card,
      items: featureDefinition.groupItems,
    }),
    section({
      items: featureDefinition.pageItems,
      headers: featureDefinition.headers,
      footers: featureDefinition.footers,
    }),

    card({ variants: featureDefinition.variants.card }),
    cardLayout({ variants: featureDefinition.variants.card }),
    nudge({ variants: featureDefinition.variants.nudge }),

    placeholder({ variants: featureDefinition.variants.placeholder }),
    lockableItem({
      items: featureDefinition.pageItems,
    }),
    ifElseBlock({
      variants: featureDefinition.variants.ifElseBlock,
      items: featureDefinition.pageItems,
    }),
    switchCaseBlock({
      variants: featureDefinition.variants.switchCaseBlock,
      items: featureDefinition.pageItems,
    }),
    dataGrid({
      variants: featureDefinition.variants.dataGrid,
    }),
    bannerComponents(featureDefinition.pageItems),
    tabs({
      items: featureDefinition.groupItems,
      variants: featureDefinition.variants.tabs,
    }),
    tab({ items: featureDefinition.groupItems }),
    contentFragment({
      items: featureDefinition.groupItems,
      variants: featureDefinition.variants.contentFragment,
    }),
    stepperComponent({ variants: featureDefinition.variants.stepper }),
    ...featureDefinition.schemas,
    giftCardsCollection,
    dialogHeader({
      items: featureDefinition.groupItems,
    }),
    form({ variants: featureDefinition.variants.forms }),
  ]),
});
