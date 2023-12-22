// University Client service to get universities by country:
import type { ExternalClient } from '@vtex/api'

import { CLIENT2_EXAMPLE_URL1 } from '../../../packages/externalClient2Packages/variablesExternalClient2'
import type { UniversityClientResponse } from '../../../typings'
import { validateClientResponse } from '../../../utils/index'
import { GetUniversityResponseSchema } from '../../../schemasValidation/index'

export async function getUniversitiesByCountry(
  this: ExternalClient,
  country: string | string[]
): Promise<UniversityClientResponse[]> {
  // 1) Get universities by country:
  try {
    const universitiesResponse: UniversityClientResponse[] =
      await this.http.get(`${CLIENT2_EXAMPLE_URL1}${country}`, {
        metric: 'get-universities',
      })

    // 2) Validate university response:
    validateClientResponse(
      'University Client',
      universitiesResponse as UniversityClientResponse[],
      GetUniversityResponseSchema
    )

    // 3) Return response if no error:
    return universitiesResponse
  } catch (error) {
    console.error('Error getting universities by country', error)
    throw error
  }
}
