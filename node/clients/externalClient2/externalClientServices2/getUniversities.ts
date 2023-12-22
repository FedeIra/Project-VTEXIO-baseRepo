import type { ExternalClient } from '@vtex/api'

import { CLIENT2_EXAMPLE_URL1 } from '../../../packages/externalClient2Packages/variablesExternalClient2'

export async function getUniversitiesByCountry(
  this: ExternalClient,
  country: string | string[]
): Promise<any> {
  const universitiesResponse: any = await this.http.get(
    `${CLIENT2_EXAMPLE_URL1}${country}`,
    {
      metric: 'get-universities',
    }
  )

  return universitiesResponse
}
