import { FeatureSchemaDefinition } from "schemas/types";

export const ihclhomepage: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title: "[Ihcl Homepage] Group With Split Cards ",
        value: "ihcl.homepage.group.group-with-split-cards", //d
      },
      {
        title: "[Ihcl Homepage] Carousel With Back Ground Image",
        value: "ihcl.homepage.group.carousel-with-back-ground-image",//d
      },
      {
        title: "[Ihcl Homepage] Carousel With 3 Column Grid",
        value: "ihcl.homepage.group.carousel-with-three-column-grid",//d
      },
      
      {
        title: "[Ihcl Homepage] 4 Column Rectangle Grid",
        value: "ihcl.homepage.group.four-column-rectangle-grid",//d
      },
      {
        title: "[Ihcl Homepage] Multiple Row 4 Column Grid",
        value: "ihcl.homepage.group.multiple-row-four-column-grid",//d
      },
    ],
    card: [
      {
        title: "[Ihcl Homepage] Card With Aspect Ratio (1:2) ",
        value: "ihcl.homepage.card.card-with-aspect-ratio-of-1-2",
      },
      {
        title: "[Ihcl Homepage]  Carousel Card With Aspect Ratio (4:3)",
        value: "ihcl.homepage.card.carousel-card-with-aspect-ratio-4-3",//d
      },
      {
        title: "[Ihcl Homepage] Card With Right Aligned Title And Link",
        value: "ihcl.homepage.card.card-with-right-aligned-title-and-link",//d
      },
     
      {
        title: "[Ihcl Homepage]  Rectangle Card With Aspect Ratio (2:4)",
        value: "ihcl.homepage.card.rectangle-card-with-right-aligned-title",//d
      },
      {
        title: " [Ihcl Homepage] Image Or Video With Full Width",
        value: "ihcl.homepage.card.image-or-video-with-full-width",//d
      },
      {
        title: "[Ihcl Homepage] Social Media Square Card",
        value: "ihcl.homepage.card.social-media-square-card",//d
      },
    ],
  },
};
