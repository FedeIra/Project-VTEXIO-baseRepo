// Import all client services here and export them:
import { IOClients } from '@vtex/api'

import VtexClient from './vtexClient/vtexClient'
import ChapurPaymentClient from './externalClient/chapurPaymentClient'
import UniversitiesClient from './externalClient2/universitiesClient'
import AWSClient from './AWSClient/awsClient'

export class Clients extends IOClients {
  public get getVtexOrderForm() {
    return this.getOrSet('getVtexOrderForm', VtexClient)
  }

  public get searchSavedPayment() {
    return this.getOrSet('searchSavedPayment', VtexClient)
  }

  public get updateSavedPaymentStatus() {
    return this.getOrSet('updateSavedPaymentStatus', VtexClient)
  }

  public get updateProcessingPayment() {
    return this.getOrSet('updateProcessingPayment', VtexClient)
  }

  public get getPaymentChapurToken() {
    return this.getOrSet('getPaymentChapurToken', ChapurPaymentClient)
  }

  public get createChapurPayment() {
    return this.getOrSet('createChapurPayment', ChapurPaymentClient)
  }

  public get getUniversities() {
    return this.getOrSet('getUniversities', UniversitiesClient)
  }

  public get sendMessageToAWS() {
    return this.getOrSet('sendMessageToQueue', AWSClient)
  }
}
