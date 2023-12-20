// Function to transform payment response from Chapur to Vtex:
import type {
  CreatePaymentAppBody,
  CreatePaymentChapurResponse,
  CreatePaymentAppResponse,
} from '../../typings/index'
import { ALL_ERRORS } from './paymentDenialMessages'

export const transformPaymentResponse = (
  {
    transactionId,
    amount,
    installments,
    paymentTimeTerms,
  }: CreatePaymentAppBody,
  chapurResponse: CreatePaymentChapurResponse
): CreatePaymentAppResponse => {
  let transformedMessage = 'Problemas al ejecutar el servidor de pago'

  const {
    data: { mensaje, fechaHoraAplicacion, monto, idAutorizacion },
    messages,
    isSuccess,
  } = chapurResponse as CreatePaymentChapurResponse

  if (mensaje && ALL_ERRORS[mensaje]) {
    transformedMessage = ALL_ERRORS[mensaje]
  } else {
    transformedMessage = 'Problemas al ejecutar el servidor de pago'
  }

  const paymentResponseVtex: CreatePaymentAppResponse = {
    transactionId,
    amount: monto ?? amount,
    installments,
    paymentTimeTerms,
    paymentDate: fechaHoraAplicacion ?? new Date().toISOString(),
    authorizationId: idAutorizacion?.toString() ?? 'not authorized',
    paymentStatus: isSuccess ? 'approved' : 'denied',
    messageError: isSuccess ? null : transformedMessage,
    messages,
  }

  return paymentResponseVtex
}
