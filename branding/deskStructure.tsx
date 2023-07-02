import {
  IoBackspaceOutline as MissingIcon,
  IoSettings as IconSettings,
  IoConstruct as IconAppConfig,
} from "react-icons/io5";
import S from "@sanity/desk-tool/structure-builder";
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

const contentFragments = S.listItem().title("CFs").child(
  S.list().title("CFs Types").items([
    S.listItem().title("Property Overview").child(S.documentTypeList("hotelOverview")),
    S.listItem().title("Availablity").child(S.documentTypeList("availability")),
    S.listItem().title("Highlights").child(S.documentTypeList("highlights")),
    S.listItem().title("Facilities").child(S.documentTypeList("facilities")),
    S.listItem().title("Rooms").child(S.documentTypeList("rooms")),
    S.listItem().title("Rate Codes").child(S.documentTypeList("rateCodes")),
    S.listItem().title("Offers").child(S.documentTypeList("offers")),
    S.listItem().title("Exclusive Offers").child(S.documentTypeList("exclusiveOffers")),
    S.listItem().title("Awards").child(S.documentTypeList("awards")),
    S.listItem().title("Social Info").child(S.documentTypeList("socialInfo")),
    S.listItem().title("Dining").child(S.documentTypeList("signatureDining")),
    S.listItem().title("Venues").child(S.documentTypeList("venues")),
    S.listItem().title("Wellness").child(S.documentTypeList("wellness")),
    S.listItem().title("Experiences").child(S.documentTypeList("experiences")),
    S.listItem().title("Gallery").child(S.documentTypeList("gallery")),
    S.listItem().title("Attractions").child(S.documentTypeList("attractions")),
    S.listItem().title("Holidays").child(S.documentTypeList("holidays")),
    S.listItem().title("Address").child(S.documentTypeList("address")),
    S.listItem().title("Contact").child(S.documentTypeList("contact")),
    // S.listItem().title("Room Offers").child(S.documentTypeList("roomOffer")),
    S.listItem().title("Guest Details").child(S.documentTypeList("guestDetails"))
  ])
)  
// const contentFragments = S.listItem().title("Bookings").child(
//   S.list().title("Bookings").items([
//     S.listItem().title("Room Offers").child(S.documentTypeList("roomOffer")),
//     S.listItem().title("Guest Details").child(S.documentTypeList("guestDetails"))
//   ])
// )  

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

const standardListItems = [
  settingsItem,
  appConfigItem,
  contentFragments,
  S.divider(),

  pagesByCategory,
  uncategorizedPages,

  S.divider(),

  ...S.documentTypeListItems().filter(
    (listItem) =>
      !["settings", "media.tag", "appConfig", "address", "contact","rooms", "roomInfo", "roomOffer", 
      "guestDetails", "awards", "wellness", "attractions", "signatureDining", "offers", "holidays", 
      "facilities", "experiences", "exclusiveOffers", "socialInfo", "venues", "gallery", "highlights", 
      "rateCodes", "hotelOverview", "availability"].includes(listItem.getId()),
  ),
];

export default async () => {
  const user = await userStore.getCurrentUser();

  const finalItems = isAdminUser(user)
    ? [...standardListItems] //bulkEditItem
    : standardListItems;

  return S.list().title("Base").items(finalItems);
};
