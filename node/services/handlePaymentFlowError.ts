// Function to handle errors in payment flow:
import type VtexClient from '../clients/vtexClient/vtexClient'
import type {
  CreatePaymentAppBody,
  SavedPaymentVtexResponse,
  CreatePaymentAppResponse,
} from '../typings/index'
import { transformPaymentError } from '../utils/index'

type ServiceClientsFailure = {
  updateProcessingPayment: VtexClient
}

export async function handlePaymentFlowError(
  body: CreatePaymentAppBody,
  savedPaymentVtex: SavedPaymentVtexResponse,
  clients: ServiceClientsFailure
): Promise<CreatePaymentAppResponse> {
  // 1) Update failed processing payment status:
  await clients.updateProcessingPayment.updateProcessingPayment(
    body.transactionId,
    false
  )

  // 2) Transform error to VTEX response format:
  const paymentAppResponse: CreatePaymentAppResponse = transformPaymentError(
    body,
    savedPaymentVtex
  )

  // 3) Return payment response to VTEX:
  return paymentAppResponse
}
