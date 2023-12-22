// Vtex service to save payment in Master Data:
import type { JanusClient } from '@vtex/api'

import type { SavedPaymentBody } from '../../../typings/index'
import { VtexVariables } from '../../../packages/index'

export async function savePaymentMasterData(
  this: JanusClient,
  id: string,
  body: SavedPaymentBody
): Promise<void> {
  // 1) Obtain saved payment from VTEX master data:
  await this.http.put(`${VtexVariables.VTEX_MASTER_DATA_URL}/${id}`, body, {
    metric: 'vtex-save-payment',
  })
}
