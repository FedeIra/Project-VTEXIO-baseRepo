// Chapur service to create payment:
import type { ExternalClient } from '@vtex/api'

import type {
  CreatePaymentChapurBody,
  CreatePaymentChapurResponse,
} from '../../../typings/index'
import { getAccessToken } from './index'
import { CLIENT_EXAMPLE_URL2 } from '../../../packages/externalClientPackages/variablesExternalClient'
import { validateClientResponse } from '../../../utils/index'
import { ChapurPaymentResponseSchema } from '../../../schemasValidation/index'

export async function createPayment(
  this: ExternalClient,
  body: CreatePaymentChapurBody
): Promise<CreatePaymentChapurResponse> {
  // 1) Obtain access-token from Chapur:
  const accessToken: string = await getAccessToken.call(this)

  // 2) Create payment in Chapur:
  const chapurResponse: CreatePaymentChapurResponse = await this.http.post(
    CLIENT_EXAMPLE_URL2,
    body,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      metric: 'payment-chapur-create',
    }
  )

  // 3) Validate Chapur response:
  validateClientResponse(
    'Chapur Create Payment',
    chapurResponse as CreatePaymentChapurResponse,
    ChapurPaymentResponseSchema
  )

  // 4) Return response if no error:
  return chapurResponse
}
