import Joi from 'joi'

// Order form Schema for VTEX order form response:
export const OrderFormEmailResponseSchema = Joi.object({
  email: Joi.string().email().required(),
})
