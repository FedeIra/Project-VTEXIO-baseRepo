// Import all general middlewares here and export them:
import { cronFilter } from './cronFilter'
import { errorHandler } from './errorHandler'
import { validateVtexCredentials } from './validateVtexCredentials'
import { validateRequestBody } from './validateRequestBody'

export const middlewaresGeneral = {
  cronFilter,
  errorHandler,
  validateRequestBody,
  validateVtexCredentials,
}
