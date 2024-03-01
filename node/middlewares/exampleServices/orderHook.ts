// Middleware responsible for creating payment in Chapur Service:

import { OrderMessageSchema } from '../../schemasValidation/index'
import type {
  OrderMessage,
  SendMessageToQueueResponse,
} from '../../typings/index'

export async function orderHook(ctx: StatusChangeContext) {
  const {
    clients: { sendMessageToAWS },
  } = ctx

  const body = ctx.body as OrderMessage

  // validate order message from VTEX with joi library using schema OrderMessageSchema:
  const { error } = OrderMessageSchema.validate(body, { abortEarly: false })

  if (error) {
    throw new Error('Invalid order message')
  }

  const orderMessage: string = JSON.stringify(body)

  const response: SendMessageToQueueResponse =
    await sendMessageToAWS.sendMessageToQueue(orderMessage)

  console.info('🚀 ~ response:', response)
}
