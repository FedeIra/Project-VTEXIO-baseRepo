// Function to validate all responses from external services (VTEX and Chapur):
import type Joi from 'joi'

import type {
  GetAccessTokenChapurResponse,
  CreatePaymentChapurResponse,
  OrderFormEmailResponse,
  SavedPaymentVtexResponse,
  UniversityClientResponse,
} from '../../typings/index'

export const validateClientResponse = (
  client: string,
  data:
    | GetAccessTokenChapurResponse
    | CreatePaymentChapurResponse
    | OrderFormEmailResponse
    | SavedPaymentVtexResponse
    | UniversityClientResponse[],
  schema: Joi.ObjectSchema | Joi.ArraySchema
) => {
  const validationResult = schema.validate(data, { abortEarly: false })

  if (validationResult.error) {
    const errorDetails = {
      title: `${client} error`,
      messageError: `${client} response validation error`,
      errorInfo: validationResult.error.details.map((error) => error.message),
    }

    throw new ClientValidationError(errorDetails)
  }
}

// Client error type:
export type ValidationErrorType = {
  title: string
  messageError: string
  errorInfo: string[]
}

// Client validation error class:
class ClientValidationError extends Error {
  public title: string
  public messageError: string
  public errorInfo: string[]

  constructor({ title, messageError, errorInfo }: ValidationErrorType) {
    super(messageError)
    this.title = title
    this.messageError = messageError
    this.errorInfo = errorInfo
  }
}
