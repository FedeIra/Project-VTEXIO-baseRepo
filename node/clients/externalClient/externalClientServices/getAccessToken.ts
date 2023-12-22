// Chapur service to obtain access-token to use Chapur services:
import type { ExternalClient } from '@vtex/api'

import { ExternalClientVariables } from '../../../packages/index'
import type { GetAccessTokenChapurResponse } from '../../../typings/index'
import { validateClientResponse } from '../../../utils/index'
import { ChapurAccessTokenResponseSchema } from '../../../schemasValidation/index'

export async function getAccessToken(this: ExternalClient): Promise<string> {
  const data = new URLSearchParams({
    grant_type:
      ExternalClientVariables.CLIENT_ACCESS_TOKEN_PARAMS_EXAMPLE.grant_type,
    username:
      ExternalClientVariables.CLIENT_ACCESS_TOKEN_PARAMS_EXAMPLE.username,
    password:
      ExternalClientVariables.CLIENT_ACCESS_TOKEN_PARAMS_EXAMPLE.password,
  })

  // 1) Obtain access-token from Chapur:
  const chapurResponse: GetAccessTokenChapurResponse = await this.http.post(
    ExternalClientVariables.CLIENT_EXAMPLE_URL1,
    data,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          ExternalClientVariables.CLIENT_AUTHORIZATION_HEADER_EXAMPLE,
      },
      metric: 'accesstoken-chapur-get',
    }
  )

  // 2) Validate Chapur response:
  validateClientResponse(
    'Chapur Get Access-Token',
    chapurResponse as GetAccessTokenChapurResponse,
    ChapurAccessTokenResponseSchema
  )

  // 3) Return access-token if no error:
  const accessToken: string = chapurResponse.access_token

  return accessToken
}
