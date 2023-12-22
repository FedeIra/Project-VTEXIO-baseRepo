// Chapur Client Class:
import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import { CLIENT2_BASE_URL } from '../../packages/externalClient2Packages/variablesExternalClient2'
import { getUniversitiesByCountry } from './externalClientServices2/index'
import type { UniversityClientResponse } from '../../typings/index'

export default class ExternalClientExample2 extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(CLIENT2_BASE_URL, context, {
      ...options,
    })
  }

  // Service to obtain universities from external API:
  public async getUniversities(
    country: string | string[]
  ): Promise<UniversityClientResponse[]> {
    return getUniversitiesByCountry.call(this, country)
  }
}
