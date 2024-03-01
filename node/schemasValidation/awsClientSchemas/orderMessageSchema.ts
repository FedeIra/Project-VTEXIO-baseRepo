import Joi from 'joi'

// Order message for AWS SQS schema:
export const OrderMessageSchema = Joi.object({
  recorder: Joi.object({
    _record: Joi.object({
      'x-vtex-meta': Joi.any().required(),
      'x-vtex-meta-bucket': Joi.any().required(),
    }).required(),
  }).required(),
  domain: Joi.string().optional().allow(null, ''),
  orderId: Joi.string().optional().allow(null, ''),
  currentState: Joi.string().optional().allow(null, ''),
  lastState: Joi.string().optional().allow(null, ''),
  currentChangeDate: Joi.string().optional().allow(null, ''),
  lastChangeDate: Joi.string().optional().allow(null, ''),
  hostname: Joi.string().optional().allow(null, ''),
})
