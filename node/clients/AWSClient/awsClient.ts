// AWS Client Class:
import type { IOContext, InstanceOptions } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { SQSClient } from '@aws-sdk/client-sqs'

import { AWSVariables } from '../../packages/index'
import { sendMessage } from './awsClientServices/index'
import type { SendMessageToQueueResponse } from '../../typings/index'

const accessKeyId = AWSVariables.AWS_ACCESS_KEY
const secretAccessKey = AWSVariables.AWS_SECRET_KEY
const region = AWSVariables.AWS_REGION
const queueUrl = AWSVariables.AWS_QUEUE_URL

export default class AWSClient extends JanusClient {
  public sqs: SQSClient
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        'Content-Type': 'application-x-www-form-urlencoded',
        ...options?.headers,
        ...(context.authToken
          ? { VtexIdclientAutCookie: context.authToken }
          : null),
      },
    })
    this.sqs = new SQSClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    })
  }

  // ORDER MESSAGE SERVICES
  public async sendMessageToQueue(
    message: string
  ): Promise<SendMessageToQueueResponse> {
    return sendMessage.call(this, message, queueUrl)
  }
}
