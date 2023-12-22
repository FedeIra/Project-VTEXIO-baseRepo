import Joi from 'joi'

// Get university response from University client service:
export const GetUniversityResponseSchema = Joi.array().items(
  Joi.object({
    name: Joi.string().required(),
    domains: Joi.array().items(Joi.string()).required(),
    web_pages: Joi.array().items(Joi.string()).required(),
    country: Joi.string().required(),
    alpha_two_code: Joi.string().required(),
    'state-province': Joi.string().optional().allow(null),
  })
)
