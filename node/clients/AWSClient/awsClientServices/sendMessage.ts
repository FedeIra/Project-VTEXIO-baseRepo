// AWS service to send order message:
import { SendMessageCommand } from '@aws-sdk/client-sqs'

import type AWSClient from '../awsClient'
import type { SendMessageToQueueResponse } from '../../../typings/index'

export async function sendMessage(
  this: AWSClient,
  message: string,
  queueUrl: string
): Promise<SendMessageToQueueResponse> {
  try {
    // 1) Define parameters for the message:
    const params = {
      QueueUrl: queueUrl,
      MessageBody: message,
    }

    // 2) Send message to queue in AWS SQS:
    const command = new SendMessageCommand(params)

    // 3) Obtain response from AWS:
    const awsResponse: SendMessageToQueueResponse | any = await this.sqs.send(
      command
    )

    // 4) Return response if no error:
    return awsResponse
  } catch (error) {
    throw new Error(
      `Error sending message to AWS SQS: ${error.message || error}`
    )
  }
}
