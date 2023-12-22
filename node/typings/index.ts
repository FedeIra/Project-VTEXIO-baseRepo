// Import all types here and export them:

// General Application types:
import {
  CreatePaymentAppBody,
  CreatePaymentAppResponse,
} from './general/createPaymentAppTypes'
// VTEX client types
import {
  OrderFormVtexResponse,
  OrderFormEmailResponse,
} from './vtexClient/orderFormTypes'
import {
  SavedPaymentBody,
  SavedPaymentVtexResponse,
  UpdatePaymentMasterdataBody,
} from './vtexClient/masterDataPaymentTypes'
// External client types:
import { GetAccessTokenChapurResponse } from './externalClient/accessTokenTypes'
import {
  CreatePaymentChapurBody,
  CreatePaymentChapurResponse,
} from './externalClient/createPaymentTypes'
// External client 2 types:
import {
  Args,
  UniversityClientResponse,
  UniversityFinalResponse,
} from './externalClient2/universityClientTypes'

export {
  CreatePaymentAppBody,
  CreatePaymentAppResponse,
  OrderFormVtexResponse,
  OrderFormEmailResponse,
  SavedPaymentBody,
  SavedPaymentVtexResponse,
  UpdatePaymentMasterdataBody,
  GetAccessTokenChapurResponse,
  CreatePaymentChapurBody,
  CreatePaymentChapurResponse,
  Args,
  UniversityClientResponse,
  UniversityFinalResponse,
}
