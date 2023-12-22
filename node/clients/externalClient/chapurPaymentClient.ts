// Chapur Client Class:
import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import { CLIENT_BASE_URL } from '../../packages/externalClientPackages/variablesExternalClient'
import { getAccessToken, createPayment } from './externalClientServices/index'
import type {
  CreatePaymentChapurBody,
  CreatePaymentChapurResponse,
} from '../../typings/index'

export default class ExternalClientExample extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      // If you want to use global variables set from administrator panel: context.settings.externalEndpoint ??
      /* context.settings.externalEndpoint ??  */ CLIENT_BASE_URL,
      context,
      {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'x-vtex-use-https': 'true',
        },
      }
    )
  }

  // Service to obtain access-token from Chapur to use Chapur services:
  public async getAccessToken(): Promise<string> {
    return getAccessToken.call(this)
  }

  // Service to create payment in Chapur:
  public async createPayment(
    body: CreatePaymentChapurBody
  ): Promise<CreatePaymentChapurResponse> {
    return createPayment.call(this, body)
  }
}
