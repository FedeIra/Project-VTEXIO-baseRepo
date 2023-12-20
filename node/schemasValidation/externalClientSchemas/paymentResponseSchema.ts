import Joi from 'joi'

// Create payment response from Chapur Service:
const DataChapur = Joi.object({
  estatus: Joi.string().required(),
  mensaje: Joi.string().allow(null).required(),
  fechaHoraAplicacion: Joi.string().allow(null).required(),
  monto: Joi.number().allow(null).required(),
  nombreCuentaHabiente: Joi.string().allow(null).required(),
  idAutorizacion: Joi.number().allow(null).required(),
  idTienda: Joi.number().allow(null).required(),
  descripcionTienda: Joi.string().allow(null).required(),
  descripcionPlataforma: Joi.string().allow(null).required(),
  idUsuario: Joi.number().allow(null).required(),
  Idplataforma: Joi.number().allow(null).required(),
})

const ModelState = Joi.object({
  additionalProp1: Joi.array().items(Joi.string()).optional(),
  additionalProp2: Joi.array().items(Joi.string()).optional(),
  additionalProp3: Joi.array().items(Joi.string()).optional(),
})

export const ChapurPaymentResponseSchema = Joi.object({
  data: DataChapur.required(),
  messages: Joi.string().required(),
  isSuccess: Joi.boolean().required(),
  internalError: Joi.string().optional(),
  message: Joi.string().optional(),
  modelState: ModelState.optional(),
})
