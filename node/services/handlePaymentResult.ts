// Function to handle
import type {
  CreatePaymentAppBody,
  CreatePaymentAppResponse,
  UpdatePaymentMasterdataBody,
} from '../typings/index'
import type VtexClient from '../clients/vtexClient/vtexClient'

type ServiceClientsSuccess = {
  updateSavedPaymentStatus: VtexClient
  updateProcessingPayment: VtexClient
}

// eslint-disable-next-line max-params
export async function handlePaymentResult(
  body: CreatePaymentAppBody,
  paymentAppResponse: CreatePaymentAppResponse,
  clients: ServiceClientsSuccess
): Promise<void> {
  // 1) Create body for update status:
  const statusUpdated: UpdatePaymentMasterdataBody = {
    transactionId: body.transactionId,
    status: paymentAppResponse.paymentStatus,
    errorCause: paymentAppResponse.messageError ?? '',
    authorizationId: paymentAppResponse.authorizationId,
  }

  // 2) Update approved/denied payment status:
  await clients.updateSavedPaymentStatus.updatePaymentStatus(statusUpdated)

  // 3) Update approved processing payment status:
  await clients.updateProcessingPayment.updateProcessingPayment(
    body.transactionId,
    false
  )
}
