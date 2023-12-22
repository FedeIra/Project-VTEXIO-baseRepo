// Params to be received by University client service:
export interface Args {
  country: string
}

// University Client response:
export interface UniversityClientResponse {
  name: string
  domains: [string]
  state_province: string | undefined
  web_pages: [string]
  country: string
  alpha_two_code: string
  'state-province'?: string | null
}

// University API final response:
export interface UniversityFinalResponse {
  state_province: string | undefined | null
  name: string
  web_pages: [string]
  domains: [string]
  country: string
  alpha_two_code: string
}
