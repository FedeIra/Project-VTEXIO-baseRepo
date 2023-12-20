import Joi from 'joi'

// Create payment body from VTEX to payment in Chapur:
export const CreatePaymentBodySchema = Joi.object({
  token: Joi.string()
    .required()
    .pattern(/^[0-9]{6}$/),
  transactionId: Joi.string().required(),
  orderId: Joi.string().required(),
  cardHolderName: Joi.string().required(),
  cardNumber: Joi.string()
    .pattern(/^[0-9]{16}$/)
    .required(),
  cvv: Joi.string()
    .pattern(/^[0-9]{3}$/)
    .required(),
  expirationMonth: Joi.string()
    .pattern(/^[0-9]{2}$/)
    .required(),
  expirationYear: Joi.string()
    .pattern(/^[0-9]{2}([0-9]{2})?$/)
    .required(),
  bin: Joi.string()
    .pattern(/^[0-9]{4,6}$/)
    .required(),
  amount: Joi.number().required(),
  installments: Joi.number().integer().required().min(0),
  paymentTimeTerms: Joi.number().integer().required().min(0).max(2),
})
