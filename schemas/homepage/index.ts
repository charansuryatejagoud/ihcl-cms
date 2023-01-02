import { FeatureSchemaDefinition } from "../types";
import locationHeader from "./locationHeader";

export const homepage: FeatureSchemaDefinition = {
  headers: [{ type: "homepage.locationConfiguration" }],
  schemas: [locationHeader],
  variants: {
    navigation: [{ title: "Homepage: Rounded", value: "homepage.rounded" }],
    card: [
      { title: "Homepage: Rounded", value: "homepage.card.rounded" },
      { title: "Homepage: Squared", value: "homepage.card.squared" },
      { title: "Homepage: Overlay", value: "homepage.card.overlay" },
      { title: "Card Rounded", value: "card.rounded" },
      { title: "Card Rounded with Title", value: "card.rounded.title" },
      { title: "Card Rounded with Detail", value: "card.rounded.detail" },
      { title: "Card Transparent", value: "card.transparent" },
      { title: "Card Squared", value: "card.squared" },
      { title: "Card Rounded with Subtitle", value: "card.rounded.subtitle" },
      { title: "Card Rounded with Bookmark", value: "card.rounded.bookmark" },
      { title: "UPI Card", value: "card.upi" },
      { title: "Card Squared Aspect 16:9", value: "card.squared.aspect16-9" },
      { title: "Card with Video Thumbnail", value: "card.video.thumbnail" },
      { title: "Card with Profile", value: "card.profile" },
      { title: "Card with Pay option ", value: "card.option.pay" },
    ],
    nudge: [
      {
        title: "Homepage: Landscape nudge for navigation",
        value: "nudge.landscape",
      },
    ],
    group: [
      {
        title: "Homepage: Grid 2-Col Tight",
        value: "homepage.grid.column-2-tight",
      },
      {
        title: "Homepage: Grid 4-Col Tight",
        value: "homepage.grid.column-4-tight",
      },
      {
        title: "Homepage: Grid 5-Col",
        value: "homepage.grid.column-5",
      },
      {
        title: "Homepage: Auto Carousel",
        value: "carousel-auto.page.indicator.bottom",
      },
      {
        title: "Homepage: Grid 3-Col, Tight",
        value: "grid.column-3-tight",
      },
      {
        title: "Homepage: Grid 3-Col, Aspect 0.5",
        value: "grid.column-3-aspect-0.5",
      },
      {
        title: "Grid 3-Col, Aspect 2:1 (Categories SLP V2)",
        value: "grid.column-3.aspect-2:1",
      },
      {
        title: "Grid 3-Col, Aspect 2:1 (Categories SLP Flutter V3)",
        value: "grid.column-3.aspect-2:1.v3",
      },
      {
        title: "Homepage: Grid 2-Col, Aspect 0.72, Black 70%",
        value: "grid.column-2-aspect-0.72-black70",
      },
      {
        title: "Homepage: Grid 2-Col, Aspect 0.75",
        value: "grid.column-2-aspect-0.75",
      },
      {
        title: "Homepage: List, Aspect 0.90",
        value: "list.aspect-0.90",
      },
      {
        title: "Homepage: Hero with List, Aspect 0.75, Black 70%",
        value: "list.hero-aspect-0.75-black70",
      },
      {
        title: "Homepage: Grid 2-Col, Aspect 1",
        value: "grid.column-2-aspect-1",
      },
      {
        title: "Homepage: List, Aspect 16:9",
        value: "list.aspect-16:9",
      },
      {
        title: "Homepage: List, Height 100px",
        value: "list.h-small",
      },
    ],
    placeholder: [
      {
        title: "Homepage Footer",
        value: "homepage.footer",
      },
      {
        title: "Homepage Exclusive offers",
        value: "homepage.exclusive.offer",
      },
      {
        title: "Homepage Upi Id",
        value: "homepage.upi.id",
      },
      {
        title: "Placeholder Personalised",
        value: "placeholder.personalised",
      },
      {
        title: "Hamburger Profile Update",
        value: "placeholder.profile.update",
      },
    ],
    ifElseBlock: [
      {
        title: "[Homepage] Neupass Membership Content",
        value: "homepage.neupass.membership",
      },
      {
        title: "If - App Update Available",
        value: "if.app-update-available",
      },
    ],
  },
  connectedStores: [
    {
      title: "Security Popup Store",
      value: "security.store",
    },
    {
      title: "[Hamburger] Profile Store",
      value: "hamburger.profile.store",
    },
  ],
};
