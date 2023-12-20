// Vtex service to obtain order form:
import type { JanusClient } from '@vtex/api'

import type { SavedPaymentVtexResponse } from '../../../typings/index'
import { VTEX_MASTER_DATA_URL } from '../../../packages/vtexClientPackages/variablesVtex'
import { validateClientResponse } from '../../../utils/index'
import { SavedPaymentVtexResponseSchema } from '../../../schemasValidation/index'

export async function searchSavedPayment(
  this: JanusClient,
  id: string
): Promise<SavedPaymentVtexResponse> {
  // 1) Obtain saved payment from VTEX master data:
  const vtexResponse: SavedPaymentVtexResponse = await this.http.get(
    `${VTEX_MASTER_DATA_URL}/${id}?_fields=paymentId,authorizationId,orderId,appName,nsu,tid,acquirer,code,message,delayToAutoSettle,delayToAutoSettleAfterAntifraud,delayToCancel,callbackUrl,email,processing,errorCause`,
    {
      metric: 'masterdata-get',
    }
  )

  // 2) Validate response from VTEX:
  validateClientResponse(
    'Vtex Master Data Search',
    vtexResponse,
    SavedPaymentVtexResponseSchema
  )

  // 3) Return saved payment if no error:
  return vtexResponse
}
