import { FeatureSchemaDefinition } from "../types";

export const slp: FeatureSchemaDefinition = {
  variants: {
    navigation: [
      { title: "Default Appbar Without Logo", value: "default.appbar" },
      { title: "Search Appbar", value: "search.appbar" },
      { title: "Cart Appbar", value: "cart.appbar" },
    ],
    placeholder: [
      { title: "Recommended Offers", value: "slp.recommended.offers" },
      { title: "Offers", value: "offers" },
      { title: "Recommended Hotels", value: "slp.recommended.hotels" },
      { title: "Recommended Products", value: "slp.recommended.products" },
      { title: "SLP Recommended", value: "slp.recommended" },
      { title: "Tata Play Services", value: "tata.play.services" },
      { title: "Tata Play Offers", value: "tata.play.offers" },
      {
        title: "Category Accordion with Cart",
        value: "category.accordion-with-cart",
      },
    ],
    card: [
      { title: "Card With Blur Title", value: "card.blur-title" },
      { title: "Card With Title Outside", value: "card.title-outside" },
      { title: "Product Card With Rating", value: "card.product-ratings" },
      { title: "Card Logo With Detail", value: "card.logo-detail" },
      { title: "Small Card", value: "card-small" },
    ],
    nudge: [
      { title: "Nudge With Blur Bottom", value: "nudge.blur-bottom" },
      { title: "Nudge With Half Banner", value: "nudge.half-banner" },
    ],
    group: [
      {
        title: "Auto Carousel, Aspect 4:3",
        value: "carousel-auto.aspectRatio-4:3",
      },
      {
        title: "List, Aspect 4:10, Background Grey",
        value: "list.aspect-4:10.background-grey",
      },
      {
        title: "List, Aspect 32:10",
        value: "list.aspect-32:10",
      },
      {
        title: "2-Column Grid, Aspect 1.8",
        value: "grid-cols2.aspect-1.8",
      },
      {
        title: "Carousel With Background Grey",
        value: "carousel.background-grey",
      },
    ],
    ifElseBlock: [
      {
        title: "TATA Play Subscription",
        value: "tata.play.subscription-status",
      },
    ],
  },
  connectedStores: [
    { title: "SLP MSD Store", value: "slp.msd.store" },
    { title: "Offer Store", value: "offer.store" },
    { title: "SLP recommended Store", value: "slp.recommended.store" },
    { title: "Cart Store", value: "cart.store" },
    { title: "Tata Play Store", value: "tata.play.store" },
  ],
};
