import { FeatureSchemaDefinition } from "../types";

export const iplSlp: FeatureSchemaDefinition = {
  schemas: [],
  pageItems: [],
  connectedStores: [],
  groupItems: [],
  variants: {
    group: [
      { title: "IPL SLP: List", value: "ipl.slp.list" },
      {
        title: "IPL SLP: Carousel",
        value: "ipl.slp.carousel",
      },
    ],
    navigation: [{ title: "Colored Back Button", value: "colored.back" }],
    card: [
      { title: "Card with Text Gradient", value: "ipl.slp.gradient" },
      {
        title: "IPL SLP: Transparent Media Large",
        value: "ipl.slp.transparent.media.large",
      },
      {
        title: "IPL SLP: Square",
        value: "ipl.slp.square",
      },
      {
        title: "IPL SLP: Circular",
        value: "ipl.slp.circular",
      },
      {
        title: "IPL SLP: Rounded",
        value: "ipl.slp.rounded",
      },
    ],
    nudge: [
      {
        title: "IPL SLP: Rounded",
        value: "ipl.slp.rounded",
      },
      {
        title: "IPL SLP: Social",
        value: "ipl.slp.social",
      },
      {
        title: "IPL SLP: Spin Wheel",
        value: "ipl.slp.spin.wheel",
      },
    ],
    placeholder: [],
    dialog: [],
  },
};
