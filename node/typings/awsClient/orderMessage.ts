// Order message received by VTEX broadcaster and sent to AWS SQS:
export interface OrderMessage {
  recorder: {
    _record: {
      'x-vtex-meta': unknown
      'x-vtex-meta-bucket': unknown
    }
  }
  domain: string | null
  orderId: string | null
  currentState: string | null
  lastState: string | null
  currentChangeDate: string | null
  lastChangeDate: string | null
  hostname: string | null
}

// Response from AWS SQS after sending order message:
export interface SendMessageToQueueResponse {
  $metadata: {
    httpStatusCode: number
    requestId: string
    extendedRequestId: string
    cfId: string
    attempts: number
    totalRetryDelay: number
  }
  MD5OfMessageBody: string
  MessageId: string
}
