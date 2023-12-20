// Import all VTEX services here and export them to be used in Chapur client:
import { getVtexOrderForm } from './getOrderForm'
import { savePaymentMasterData } from './savePaymentMasterdata'
import { searchSavedPayment } from './searchPaymentMasterdata'
import {
  updateSavedPayment,
  updateProcessingPayment,
} from './updatePaymentMasterdata'

export {
  getVtexOrderForm,
  savePaymentMasterData,
  searchSavedPayment,
  updateSavedPayment,
  updateProcessingPayment,
}
