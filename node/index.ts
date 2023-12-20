// External packages:
import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

// Typings:
import type { CreatePaymentAppBody } from './typings/index'
// Local modules and clients:
import { Clients } from './clients'
import { middlewaresServiceExample } from './middlewares/exampleServices/index'
import { middlewaresGeneral } from './middlewares/general/index'

const { cronFilter, errorHandler, validateRequestBody } = middlewaresGeneral

const { createPaymentChapur } = middlewaresServiceExample

// Cache configuration:
const TIMEOUT_MS = 30000
const memoryCache = new LRUCache<string, any>({ max: 30000 })

metrics.trackCache('status', memoryCache)

// Clients instantiation:
const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 1,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

// Global context type definition:
declare global {
  type Context = ServiceContext<Clients, State>
  interface State extends RecorderState {
    bodyVtex: CreatePaymentAppBody
  }
}

// Service instantiation:
export default new Service({
  clients,
  routes: {
    exampleService: method({
      POST: [
        cronFilter,
        errorHandler,
        validateRequestBody,
        createPaymentChapur,
      ],
    }),
  },
})
