// Middleware responsible for validating request body from VTEX:
import { json } from 'co-body'
import type Joi from 'joi'

import { CreatePaymentBodySchema } from '../../schemasValidation/index'

// interface to store route and corresponding schema:
interface RouteDefaultSchema {
  [key: string]: Joi.ObjectSchema
}

const routeDefaultSchema: RouteDefaultSchema = {
  createPaymentChapur: CreatePaymentBodySchema,
}

export async function validateRequestBody(
  ctx: Context,
  next: () => Promise<void>
) {
  // 1) select schema according to route:
  const schema: Joi.ObjectSchema | undefined =
    routeDefaultSchema[ctx.vtex.route.id]

  // 2) Check if schema doesn't exist for the route:
  if (!schema) {
    ctx.status = 400
    ctx.body = {
      statusError: 400,
      error: 'Bad Request',
      message: `No validation schema found for route ${ctx.vtex.route.id}`,
    }

    return
  }

  // 3) validate body using selected schema:
  const bodyVtex = await json(ctx.req)

  const { error } = schema.validate(bodyVtex, { abortEarly: false })

  if (error) {
    ctx.status = 400
    ctx.body = {
      statusError: 400,
      error: 'Bad Request',
      message: 'Invalid body',
      errors: error.details.map((err: { message: string }) =>
        err.message.replace(/"/g, '')
      ),
    }

    return
  }

  // 4) if valid body, continue:
  ctx.state.bodyVtex = bodyVtex

  await next()
}
