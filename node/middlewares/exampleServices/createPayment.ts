// Middleware responsible for creating payment in Chapur Service:
import type {
  CreatePaymentAppBody,
  CreatePaymentAppResponse,
} from '../../typings/index'
import { createPaymentChapurService } from '../../services/index'

export async function createPaymentChapur(ctx: Context) {
  const {
    vtex: { logger },
  } = ctx

  const body = ctx.state.bodyVtex as CreatePaymentAppBody

  logger.info(
    JSON.stringify({
      message: 'Payment try',
      paymentCreationBody: body ?? 'No request body',
    })
  )

  ctx.set('Cache-Control', 'no-cache')

  // 1) Use create payment service:
  const paymentResponse: CreatePaymentAppResponse | void =
    await createPaymentChapurService(ctx, body)

  logger.info(
    JSON.stringify({
      message: 'Payment created',
      paymentResponse: paymentResponse ?? 'No response',
    })
  )

  ctx.body = paymentResponse
  ctx.status = 200
}
