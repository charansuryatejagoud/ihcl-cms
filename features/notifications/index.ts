import {FeatureSchemaDefinition} from '../../schemas/types'

export const notifications: FeatureSchemaDefinition = {
  variants: {
    card: [
      {
        title: '[Notifications] Subscription Confirmation',
        value: 'notifications.card.subscription.confirmation',
      },
    ],
    switchCaseBlock: [
      {
        title: '[Notifications] user Subscription Case',
        value: 'notifications.switchCaseBlock.user-subscription-case',
      },
    ],
  },
}
