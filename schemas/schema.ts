import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import { featureDefinition } from "./feature-schemas";

import page from "./core/documents/page";
import group from "./core/objects/group";
import placeholder from "./core/objects/placeholder";
import card from "./core/objects/card";
import dialog from "./core/documents/dialog";
import nudge from "./core/objects/nudge";
import lockableItem from "./core/objects/lockableItem";
import attachedContent from "./core/documents/attachedContent";
import ifElseBlock from "./core/objects/ifElseBlock";
import { switchCaseBlock } from "./core/objects/switchCaseBlock";
import section from "./core/objects/section";
import dataGrid from "./core/objects/dataGrid";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page({
      items: featureDefinition.pageItems,
      connectedStores: featureDefinition.connectedStores,
      headers: featureDefinition.headers,
      footers: featureDefinition.footers,
      navigationVariants: featureDefinition.variants.navigation,
      transformers: featureDefinition.transformers,
    }),
    attachedContent({
      items: featureDefinition.pageItems,
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
    section({
      items: featureDefinition.pageItems,
      headers: featureDefinition.headers,
      footers: featureDefinition.footers,
    }),

    card({ variants: featureDefinition.variants.card }),
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
    ...featureDefinition.schemas,
  ]),
});
