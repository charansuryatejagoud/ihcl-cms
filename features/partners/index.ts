import {FeatureSchemaDefinition} from '../../schemas/types'

export const partners: FeatureSchemaDefinition = {
  variants: {
    group: [
      {
        title: '[Partners] Questions And Answers',
        value: 'partners.group.questions-and-answers',
      },
      {
        title: '[Partners] Multiple Row Two 2 Column Grid',
        value: 'partners.group.multiple-row-2-column-grid',
      },
    ],
    card: [
      {
        title: '[Partners] Right Media Image Carousel with Left Content',
        value: 'partners.card.right-media-image-carousel-with-left-content',
      },
      {
        title: '[Partners] Left Media Right Center Align Content',
        value: 'partners.card.left-media-right-center-align-content',
      },
    ],
    nudge: [
      {
        title: '[Partners] Left Image Right Content With Border',
        value: 'partners.nudge.left-image-right-content-with-border',
      },
      {
        title: '[Partners] Nudge With Two Links',
        value: 'partners.nudge.nudge-with-two-links',
      },
    ],
  },
}
