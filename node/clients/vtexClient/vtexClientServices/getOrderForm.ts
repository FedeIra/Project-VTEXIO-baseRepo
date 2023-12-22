// Vtex service to obtain order form:
import type { JanusClient } from '@vtex/api'

import type {
  OrderFormVtexResponse,
  OrderFormEmailResponse,
} from '../../../typings/index'
import { VtexVariables } from '../../../packages/index'
import { validateClientResponse } from '../../../utils/index'
import { OrderFormEmailResponseSchema } from '../../../schemasValidation/index'

export async function getVtexOrderForm(
  this: JanusClient,
  id: string
): Promise<OrderFormEmailResponse> {
  // 1) Obtain order form from VTEX:
  const vtexResponse: OrderFormVtexResponse = await this.http.get(
    `${VtexVariables.VTEX_ORDER_FORM_URL}${id}`,
    {
      metric: 'order-form-get',
    }
  )

  const response: OrderFormEmailResponse = {
    email: vtexResponse.clientProfileData.email,
  }

  // 3) Validate email from order form:
  validateClientResponse(
    'Vtex OrderForm Search',
    response,
    OrderFormEmailResponseSchema
  )

  // 4) Return email if no error:
  return response
}
