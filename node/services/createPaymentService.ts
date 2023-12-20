// Service to create payment in Chapur Service:
import type {
  CreatePaymentAppBody,
  SavedPaymentVtexResponse,
  CreatePaymentChapurBody,
  CreatePaymentChapurResponse,
  CreatePaymentAppResponse,
} from '../typings/index'
import { transformPaymentBody, transformPaymentResponse } from '../utils/index'
import { handlePaymentResult, handlePaymentFlowError } from './index'

export async function createPaymentChapurService(
  ctx: Context,
  body: CreatePaymentAppBody
): Promise<CreatePaymentAppResponse | void> {
  const {
    searchSavedPayment,
    updateProcessingPayment,
    createChapurPayment,
    updateSavedPaymentStatus,
  } = ctx.clients

  // 1) Obtain payment data from master data:
  const savedPaymentVtex: SavedPaymentVtexResponse =
    await searchSavedPayment.searchPayment(body.transactionId)

  // 2) If payment is processing end flow, else start processing:
  if (savedPaymentVtex.processing) return

  await updateProcessingPayment.updateProcessingPayment(
    body.transactionId,
    true
  )
  try {
    // 1) Transform payment data to Chapur request body:
    const paymentChapurBody: CreatePaymentChapurBody = transformPaymentBody(
      body,
      savedPaymentVtex.email
    )

    // 2) Use Chapur Service to create payment:
    const paymentChapurResponse: CreatePaymentChapurResponse =
      await createChapurPayment.createPayment(paymentChapurBody)

    // 3) Transform chapur response to Vtex response format:
    const paymentAppResponse: CreatePaymentAppResponse =
      transformPaymentResponse(body, paymentChapurResponse)

    // If no error:
    await handlePaymentResult(body, paymentAppResponse, {
      updateProcessingPayment,
      updateSavedPaymentStatus,
    })

    // 4) Return payment response to VTEX:
    return paymentAppResponse
  } catch (error) {
    // 1) If cancel request or error:
    const paymentAppResponse: CreatePaymentAppResponse =
      await handlePaymentFlowError(body, savedPaymentVtex, {
        updateProcessingPayment,
      })

    // 2) Return error to VTEX:
    return paymentAppResponse
  }
}
