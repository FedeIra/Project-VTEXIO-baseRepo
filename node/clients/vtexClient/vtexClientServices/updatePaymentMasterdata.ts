// Vtex master data service to update payment:
import type { JanusClient } from '@vtex/api'

import { VtexVariables } from '../../../packages/index'
import type { UpdatePaymentMasterdataBody } from '../../../typings/index'

// eslint-disable-next-line max-params
export async function updateSavedPayment(
  this: JanusClient,
  statusUpdate: UpdatePaymentMasterdataBody
): Promise<void> {
  // 1) update payment status in master data:
  await this.http.patch(
    `${VtexVariables.VTEX_MASTER_DATA_URL}/${statusUpdate.transactionId}?_fields=_all`,
    statusUpdate,
    {
      metric: 'masterdata-update',
    }
  )
}

// Vtex master data service to update payment processing status:
export async function updateProcessingPayment(
  this: JanusClient,
  transactionId: string,
  processingStatus: boolean
): Promise<void> {
  // 1) update processing status in master data:
  await this.http.patch(
    `${VtexVariables.VTEX_MASTER_DATA_URL}/${transactionId}?_fields=_all`,
    {
      processing: processingStatus,
    },
    {
      metric: 'masterdata-update-processing',
    }
  )
}
