// Import all schemas here and export them:
import { OrderFormEmailResponseSchema } from './vtexClientSchemas/orderFormEmailResponseSchema'
import { SavedPaymentVtexResponseSchema } from './vtexClientSchemas/savedPaymentResponseSchema'
import { ChapurAccessTokenResponseSchema } from './externalClientSchemas/accessTokenResponseSchema'
import { CreatePaymentBodySchema } from './generalSchemas/createPaymentAppBodySchema'
import { ChapurPaymentResponseSchema } from './externalClientSchemas/paymentResponseSchema'

export {
  OrderFormEmailResponseSchema,
  SavedPaymentVtexResponseSchema,
  ChapurAccessTokenResponseSchema,
  CreatePaymentBodySchema,
  ChapurPaymentResponseSchema,
}
