// External packages:
import type {
  ClientsConfig,
  ServiceContext,
  RecorderState,
  EventContext,
} from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

// Typings:
import type { CreatePaymentAppBody } from './typings/index'
// Local modules and clients:
import { Clients } from './clients'
import { middlewaresServiceExample } from './middlewares/exampleServices/index'
import { middlewaresGeneral } from './middlewares/general/index'
import { getUniversitiesResolver } from './resolvers/universities'

const { cronFilter, errorHandler, validateRequestBody } = middlewaresGeneral

const { createPaymentChapur, orderHook } = middlewaresServiceExample

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
    bodyVtex?: CreatePaymentAppBody
    // If you want to use global variables set from administrator panel:
    // appSettings: {
    //   externalEndpoint?: string
    // }
  }
  interface StatusChangeContext extends EventContext<Clients> {
    // event payload body
    body: {
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }
}

// Service instantiation:
export default new Service({
  clients,
  // Custom routes API REST:
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
  // Custom routes API GraphQL:
  graphql: {
    resolvers: {
      Query: {
        getUniversitiesResolver,
      },
    },
  },
  // Events and triggers:
  events: {
    orderHook,
  },
})
