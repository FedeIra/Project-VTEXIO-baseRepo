// Import all payment app middlewares here and export them:

import { createPaymentChapur } from './createPayment'
import { orderHook } from './orderHook'

export const middlewaresServiceExample = {
  createPaymentChapur,
  orderHook,
}
