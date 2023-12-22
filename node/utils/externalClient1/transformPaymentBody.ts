// Function to transform payment data from VTEX to Chapur request body:
import { CHAPUR_PAYMENT_BODY } from './defaultValuesChapur'
import type {
  CreatePaymentAppBody,
  CreatePaymentChapurBody,
} from '../../typings/index'
import { transformDate } from './transformDateChapurBody'

const {
  ID_STORE,
  PASSWORD_PLATFORM,
  PLATFORM_ID,
  USER_PLATFORM,
  DEFAULT_PAYMENT_TERM,
} = CHAPUR_PAYMENT_BODY

export const transformPaymentBody = (
  {
    token,
    orderId,
    cardHolderName,
    cardNumber,
    cvv,
    expirationMonth,
    expirationYear,
    amount,
    installments,
    paymentTimeTerms,
  }: CreatePaymentAppBody,
  userEmail: string
) => {
  const paymentBodyChapur: CreatePaymentChapurBody = {
    Amount: amount,
    CVV: cvv,
    CreateDate: transformDate(expirationMonth, expirationYear),
    Email: userEmail,
    IdPurchaseOrder: orderId,
    IdStore: ID_STORE,
    NameCreditCard: cardHolderName,
    NoCreditCard: cardNumber,
    PasswordPlatform: PASSWORD_PLATFORM,
    PlatformId: PLATFORM_ID,
    Token: token,
    UserPlatform: USER_PLATFORM,
    months: installments,
    withInterest: paymentTimeTerms ?? DEFAULT_PAYMENT_TERM,
  }

  return paymentBodyChapur
}
