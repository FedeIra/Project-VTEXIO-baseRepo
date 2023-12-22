// VTEX Client Class:
import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

import { VtexVariables } from '../../packages/index'
import {
  getVtexOrderForm,
  savePaymentMasterData,
  searchSavedPayment,
  updateSavedPayment,
  updateProcessingPayment,
} from './vtexClientServices/index'
import type {
  SavedPaymentBody,
  SavedPaymentVtexResponse,
  OrderFormEmailResponse,
  UpdatePaymentMasterdataBody,
} from '../../typings/index'

// Vtex Client Class:
export default class VtexClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Vtex-Use-Https': 'true',
        'X-VTEX-API-AppKey': VtexVariables.VTEX_APP_KEY,
        'X-VTEX-API-AppToken': VtexVariables.VTEX_APP_TOKEN,
        // VtexIdclientAutCookie: VtexVariables.VTEX_AUTH_COOKIE,
      },
    })
  }

  // ORDER FORM SERVICES:
  // Service to obtain email from order form:
  public async getOrderDetails(id: string): Promise<OrderFormEmailResponse> {
    return getVtexOrderForm.call(this, id)
  }

  // MASTER DATA SERVICES:
  // Service to save payment data:
  public async createLogPayment(body: SavedPaymentBody): Promise<void> {
    const uniqueId = body.transactionId

    return savePaymentMasterData.call(this, uniqueId, body)
  }

  // Service to search for payment:
  public async searchPayment(id: string): Promise<SavedPaymentVtexResponse> {
    return searchSavedPayment.call(this, id)
  }

  // Service to update payment status:
  public async updatePaymentStatus(
    paymentAppResponse: UpdatePaymentMasterdataBody
  ): Promise<void> {
    return updateSavedPayment.call(this, paymentAppResponse)
  }

  // Service to update processing status of payment:
  public async updateProcessingPayment(
    id: string,
    processingStatus: boolean
  ): Promise<void> {
    return updateProcessingPayment.call(this, id, processingStatus)
  }
}
