// CreatePayment body request to be received by Chapur Service:
export interface CreatePaymentChapurBody {
  Amount: number
  CVV: string
  CreateDate: string
  Email: string
  IdPurchaseOrder: string
  IdStore: string
  NameCreditCard: string
  NoCreditCard: string
  PasswordPlatform: string
  PlatformId: string
  Token: string
  UserPlatform: string
  months: number
  withInterest: number
}

// CreatePayment response to be received by middleware from Chapur:
export interface CreatePaymentChapurResponse {
  data: DataChapur
  messages: string
  isSuccess: boolean
  internalError?: string
  message?: string
  modelState?: ModelStateChapur
}

interface DataChapur {
  estatus: string
  mensaje: string | null
  fechaHoraAplicacion: string | null
  monto: number | null
  nombreCuentaHabiente: string | null
  idAutorizacion: number | null
  idTienda: number | null
  descripcionTienda: string | null
  descripcionPlataforma: string | null
  idUsuario: number | null
  Idplataforma: number | null
}

interface ModelStateChapur {
  additionalProp1?: string[]
  additionalProp2?: string[]
  additionalProp3?: string[]
}
