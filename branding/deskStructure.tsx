import {
  IoBackspaceOutline as MissingIcon,
  IoDocument as ArticleIcon,
  IoRemoveCircle as BulkEditIcon,
  IoSettings as IconSettings,
  IoConstruct as IconAppConfig,
} from "react-icons/io5";
import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import { createSuperPane } from "sanity-super-pane";
import userStore from "part:@sanity/base/user";
import { isAdminUser } from "../schemas/shared-utils";

// Get the logged-in user
const getCurrentUser = () => {
  userStore.me.subscribe((user) => {
    // Instead of a local variable, we use this window object to re-use it through the Studio
    window["_sanityUser"] = user ?? undefined;
  });
};

getCurrentUser();

// Setup the structure

const uncategorizedPages = S.listItem()
  .title("(Uncategorized Pages)")
  .icon(MissingIcon)
  .child(
    S.documentList()
      .title("Pages")
      .filter('_type == "page" && !defined(category)'),
  );

// const articles = S.listItem({
//   id: "article",
//   title: "Article",
//   icon: ArticleIcon,
//   child: () => {
//     return S.documentList()
//       .title("Articles")
//       .filter('_type == "page" && variant == "article"')
//       .initialValueTemplates([
//         // @ts-ignore
//         S.initialValueTemplateItem("article-template"),
//       ]);
//   },
// });

// prettier-ignore
const settingsItem = S.listItem()
    .title("Settings")
    .icon(IconSettings)
    .child(
        S.editor()
            .schemaType("settings")
            .documentId("settings"),
    );

// prettier-ignore
const appConfigItem = S.listItem()
  .title("App Configuration")
  .icon(IconAppConfig)
  .child(
      S.editor()
          .schemaType("appConfig")
          .documentId("appConfig")
  );

const categoryList = S.documentTypeList("category")
  .title("Category")
  .child((categoryId) => {
    return S.documentList()
      .title("Pages")
      .filter('_type == "page" && category._ref == $categoryId')
      .params({ categoryId })
      .initialValueTemplates([
        S.initialValueTemplateItem("page-by-category", {
          categoryId,
        }).serialize(),
      ]);
  });

// prettier-ignore
const pagesByCategory = S.listItem()
    .title("Pages by Category")
    .child(categoryList);

// const bulkEditItem = S.listItem()
//   .title("Bulk Edit")
//   .icon(BulkEditIcon)
//   .child(
//     S.list()
//       .title("Bulk Edit")
//       .items([
//         // S.listItem().title("Brand").child(createSuperPane("brand")),
//         S.listItem().title("Page").child(createSuperPane("page")),
//       ]),
//   );

const standardListItems = [
  settingsItem,
  appConfigItem,

  S.divider(),

  pagesByCategory,
  uncategorizedPages,

  S.divider(),

  ...S.documentTypeListItems().filter(
    (listItem) =>
      !["settings", "media.tag", "appConfig"].includes(listItem.getId()),
  ),
  // articles,

  // S.divider(),
];

export default async () => {
  const user = await userStore.getCurrentUser();

  const finalItems = isAdminUser(user)
    ? [...standardListItems, ]//bulkEditItem
    : standardListItems;

  return S.list().title("Base").items(finalItems);
};
