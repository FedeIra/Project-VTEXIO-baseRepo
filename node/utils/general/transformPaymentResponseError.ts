// Function to transform error payment response to Vtex format:
import type {
  CreatePaymentAppBody,
  SavedPaymentVtexResponse,
  CreatePaymentAppResponse,
} from '../../typings/index'

export const transformPaymentError = (
  {
    transactionId,
    amount,
    installments,
    paymentTimeTerms,
    orderId,
  }: CreatePaymentAppBody,
  { authorizationId }: SavedPaymentVtexResponse
): CreatePaymentAppResponse => {
  const paymentResponseVtex: CreatePaymentAppResponse = {
    transactionId,
    amount,
    installments,
    paymentTimeTerms,
    paymentDate: new Date().toISOString(),
    authorizationId: authorizationId?.toString() ?? 'not authorized',
    paymentStatus: 'denied',
    messageError: 'Problemas al ejecutar el servicio de pago',
    messages:
      orderId === 'cancel'
        ? 'Payment cancelled'
        : 'Problemas al cancelar el pago',
  }

  return paymentResponseVtex
}
