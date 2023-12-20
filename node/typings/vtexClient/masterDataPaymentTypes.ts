// Request body to save payment in Master Data:
export interface SavedPaymentBody {
  paymentId: string
  status: string
  authorizationId: string
  orderId: string
  transactionId: string
  appName: string
  timestamp: string
  nsu: string
  tid: string
  acquirer: string
  code: string
  message: string
  delayToAutoSettle: number
  delayToAutoSettleAfterAntifraud: number
  delayToCancel: number
  amount: number
  email: string
  months: number
  withInterest: number
  callbackUrl: string
}

// response to be received from Master Data:
export interface SavedPaymentVtexResponse {
  paymentId: string
  authorizationId: string
  orderId: string
  appName: string
  nsu: string
  tid: string
  acquirer: string
  code: string
  message: string
  delayToAutoSettle: number
  delayToAutoSettleAfterAntifraud: number
  delayToCancel: number
  callbackUrl: string
  email: string
  processing: boolean
  errorCause?: string
}

// update body to be sent to Master Data:
export interface UpdatePaymentMasterdataBody {
  transactionId: string
  status: string
  errorCause?: string
  authorizationId?: string
}
