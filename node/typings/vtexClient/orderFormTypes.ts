// order form to be received from Vtex checkout API:
export interface OrderFormVtexResponse {
  orderFormId: string
  salesChannel: string
  loggedIn: boolean
  isCheckedIn: boolean
  storeId: string | null
  checkedInPickupPointId: string | null
  allowManualPrice: boolean
  canEditData: boolean
  userProfileId: string | null
  userType: string | null
  ignoreProfileData: boolean
  value: number
  messages: unknown[]
  items: OrderFormBodyItem[]
  selectableGifts: unknown[]
  totalizers: Totalizer[]
  shippingData: ShippingData
  clientProfileData: ClientProfileData
  paymentData: PaymentData
  marketingData: MarketingData | null
  sellers: Seller[]
  clientPreferencesData: ClientPreferencesData
  commercialConditionData: string | null
  storePreferencesData: StorePreferencesData
  giftRegistryData: string | null
  openTextField: string | null
  invoiceData: string | null
  customData: string | null
  itemMetadata: ItemMetadata
  hooksData: string | null
  ratesAndBenefitsData: RatesAndBenefitsData
  subscriptionData: string | null
  merchantContextData: string | null
  itemsOrdination: string | null
}

export interface ClientPreferencesData {
  locale: string
  optinNewsLetter: boolean | null
}

export interface ClientProfileData {
  email: string
  firstName: string
  lastName: string
  document: string
  documentType: string
  phone: string
  corporateName: string | null
  tradeName: string | null
  corporateDocument: string | null
  stateInscription: string | null
  corporatePhone: string | null
  isCorporate: boolean
  profileCompleteOnLoading: boolean
  profileErrorOnLoading: boolean
  customerClass: string | null
}

export interface ItemMetadata {
  items: ItemMetadataItem[]
}

export interface ItemMetadataItem {
  id: string
  seller: string
  name: string
  skuName: string
  productId: string
  refId: string
  ean: string
  imageUrl: string
  detailUrl: string
  assemblyOptions: unknown[]
}

export interface OrderFormBodyItem {
  uniqueId: string
  id: string
  productId: string
  productRefId: string
  refId: string
  ean: string
  name: string
  skuName: string
  modalType: string | null
  parentItemIndex: string | null
  parentAssemblyBinding: string | null
  assemblies: unknown[]
  priceValidUntil: Date
  tax: number
  price: number
  listPrice: number
  manualPrice: number | null
  manualPriceAppliedBy?: string | null
  sellingPrice: number
  rewardValue: number
  isGift: boolean
  additionalInfo: AdditionalInfo
  preSaleDate: string | null
  productCategoryIds: string
  productCategories: { [key: string]: string }
  quantity: number
  seller: string
  sellerChain: string[]
  imageUrl: string
  detailUrl: string
  components: unknown[]
  bundleItems: unknown[]
  attachments: unknown[]
  attachmentOfferings: unknown[]
  offerings: unknown[]
  priceTags: PriceTag[]
  availability: string
  measurementUnit: string
  unitMultiplier: number
  manufacturerCode: string | null
  priceDefinition: PriceDefinition
  taxCode: string
}

export interface AdditionalInfo {
  dimension?: string | null
  brandName: string
  brandId: string
  offeringInfo: string | null
  offeringType: string | null
  offeringTypeId: string | null
}

export interface PriceDefinition {
  calculatedSellingPrice: number
  total: number
  sellingPrices: SellingPrice[]
}

export interface SellingPrice {
  value: number
  quantity: number
}

export interface PriceTag {
  name: string
  value: number
  rawValue: number
  isPercentual: boolean
  identifier: string
  owner: string
}

export interface MarketingData {
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
  utmipage: string | null
  utmiPart: string | null
  utmiCampaign: string | null
  coupon: string | null
  marketingTags: string[]
}

export interface PaymentData {
  updateStatus: string
  installmentOptions: InstallmentOption[]
  paymentSystems: PaymentSystem[]
  payments: Payment[]
  giftCards: unknown[]
  giftCardMessages: unknown[]
  availableAccounts: AvailableAccount[]
  availableTokens: unknown[]
  availableAssociations?: AvailableAssociations | null
}

export interface AvailableAccount {
  accountId: string
  paymentSystem: string
  paymentSystemName: string
  cardNumber: string
  bin: string
  availableAddresses: string[]
  isExpired: boolean
}

// interface AvailableAssociations that can be any type of object:
export interface AvailableAssociations {
  [key: string]: unknown
}

export interface InstallmentOption {
  paymentSystem: string
  bin: string | null
  paymentName: string | null
  paymentGroupName: string | null
  value: number
  installments: Installment[]
}

export interface Installment {
  count: number
  hasInterestRate: boolean
  interestRate: number
  value: number
  total: number
  sellerMerchantInstallments?: Installment[]
  id?: string
}

export interface PaymentSystem {
  id: number
  name: string
  groupName: string
  validator: Validator
  stringId: string
  template: string
  requiresDocument: boolean
  displayDocument: boolean
  isCustom: boolean
  description: null | string
  requiresAuthentication: boolean
  dueDate: Date
  availablePayments: string | null
}

export interface Validator {
  regex: null | string
  mask: null | string
  cardCodeRegex: null | string
  cardCodeMask: null | string
  weights: number[] | null
  useCvv: boolean
  useExpirationDate: boolean
  useCardHolderName: boolean
  useBillingAddress: boolean
}

export interface Payment {
  paymentSystem: string
  bin: string | null
  accountId: string | null
  tokenId: string | null
  installments: number
  referenceValue: number
  value: number
  merchantSellerPayments: MerchantSellerPayment[]
}

export interface MerchantSellerPayment {
  id: string
  installments: number
  referenceValue: number
  value: number
  interestRate: number
  installmentValue: number
}

export interface RatesAndBenefitsData {
  rateAndBenefitsIdentifiers: RateAndBenefitsIdentifier[]
  teaser: unknown[]
}

export interface RateAndBenefitsIdentifier {
  id: string
  name: string
  featured: boolean
  description: string | null
  matchedParameters: AvailableAssociations
  additionalInfo: string | null
}

export interface Seller {
  id: string
  name: string
  logo: string
}

export interface ShippingData {
  address: Address | null
  logisticsInfo: LogisticsInfo[]
  selectedAddresses: Address[]
  availableAddresses: Address[]
  pickupPoints: unknown[]
}

export interface Address {
  addressType: string
  receiverName: string
  addressId: string
  isDisposable: boolean
  postalCode: string
  city: string
  state: string
  country: string
  street: string
  number: number | null
  neighborhood: string | null
  complement: string | null
  reference: string | null
  geoCoordinates: unknown[]
}

export interface LogisticsInfo {
  itemIndex: number
  selectedSla: string | null
  selectedDeliveryChannel: string | null
  addressId: string | null
  slas: Sla[]
  shipsTo: string[]
  itemId: string
  deliveryChannels: DeliveryChannel[]
}

export interface DeliveryChannel {
  id: string
}

export interface Sla {
  id: string
  deliveryChannel: string
  name: string
  deliveryIds: DeliveryID[]
  shippingEstimate: string
  shippingEstimateDate: string | null
  lockTTL: string | null
  availableDeliveryWindows: DeliveryWindow[]
  deliveryWindow: DeliveryWindow
  price: number
  listPrice: number
  tax: number
  pickupStoreInfo: PickupStoreInfo
  pickupPointId: string | null
  pickupDistance: string | null
  polygonName: string
  transitTime: string
}

export interface DeliveryWindow {
  startDateUtc: Date
  endDateUtc: Date
  price: number
  lisPrice: number
  tax: number
}

export interface DeliveryID {
  courierId: string
  warehouseId: string
  dockId: string
  courierName: string
  quantity: number
  kitItemDetails: unknown[]
}

export interface PickupStoreInfo {
  isPickupStore: boolean
  friendlyName: string | null
  address: string | null
  additionalInfo: string | null
  dockId: string | null
}

export interface StorePreferencesData {
  countryCode: string
  saveUserData: boolean
  timeZone: string
  currencyCode: string
  currencyLocale: number
  currencySymbol: string
  currencyFormatInfo: CurrencyFormatInfo
}

export interface CurrencyFormatInfo {
  currencyDecimalDigits: number
  currencyDecimalSeparator: string
  currencyGroupSeparator: string
  currencyGroupSize: number
  startsWithCurrencySymbol: boolean
}

export interface Totalizer {
  id: string
  name: string
  value: number
  alternativeTotals?: Totalizer[]
}

// order form data to be used on our middleware:
export interface OrderFormEmailResponse {
  email: string
}
