import Joi from 'joi'

// Saved payment response schema from master data:
export const SavedPaymentVtexResponseSchema = Joi.object({
  paymentId: Joi.string().required(),
  authorizationId: Joi.string().required(),
  orderId: Joi.string().required(),
  appName: Joi.string().required(),
  nsu: Joi.string().required(),
  tid: Joi.string().required(),
  acquirer: Joi.string().required(),
  code: Joi.string().required(),
  message: Joi.string().required(),
  delayToAutoSettle: Joi.number().required(),
  delayToAutoSettleAfterAntifraud: Joi.number().required(),
  delayToCancel: Joi.number().required(),
  callbackUrl: Joi.string().required(),
  email: Joi.string().required(),
  processing: Joi.boolean().required(),
  errorCause: Joi.string().optional().allow(null, ''),
})
