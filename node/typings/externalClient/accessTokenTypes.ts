// Response received by middleware from Chapur access token service:
export interface GetAccessTokenChapurResponse {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  firstName: string
  lastName: string
  email: string
  jti: string
}
