import Joi from 'joi'

// Access token response from Chapur service:
export const ChapurAccessTokenResponseSchema = Joi.object({
  access_token: Joi.string().required(),
  token_type: Joi.string().required(),
  refresh_token: Joi.string().required(),
  expires_in: Joi.number().required(),
  scope: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  jti: Joi.string().required(),
})
