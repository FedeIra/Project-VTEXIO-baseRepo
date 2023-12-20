// CreatePayment body request to be received by Payment App middleware:
export interface CreatePaymentAppBody {
  token: string
  transactionId: string
  orderId: string
  cardHolderName: string
  cardNumber: string
  cvv: string
  expirationMonth: string
  expirationYear: string
  bin: string
  amount: number
  installments: number
  paymentTimeTerms: PaymentTimeTerms
}

type PaymentTimeTerms = 0 | 1 | 2

// CreatePayment response to be received by VTEX:
export interface CreatePaymentAppResponse {
  transactionId: string
  amount: number
  installments: number
  paymentTimeTerms: number
  paymentDate: string
  authorizationId: string
  paymentStatus: Status
  messageError: string | null
  messages?: string
}

type Status = 'approved' | 'denied'
