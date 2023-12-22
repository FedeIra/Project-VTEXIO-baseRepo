// // Chapur Client Class:
// import type { InstanceOptions, IOContext } from '@vtex/api'
// import { ExternalClient } from '@vtex/api'

// import { CLIENT2_BASE_URL } from '../../packages/externalClient2Packages/variablesExternalClient2'
// import { getUniversitiesByCountry } from './externalClientServices2/index'
// // import type {
// //   CreatePaymentChapurBody,
// // } from '../../typings/index'

// export default class ExternalClientExample2 extends ExternalClient {
//   constructor(context: IOContext, options?: InstanceOptions) {
//     super(
//       // If you want to use global variables set from administrator panel: context.settings.externalEndpoint ??
//       /* context.settings.externalEndpoint ??  */ CLIENT2_BASE_URL,
//       context,
//       {
//         ...options,
//       }
//     )
//   }

//   // Service to obtain access-token from Chapur to use Chapur services:
//   public async getUniversities(country: string | string[]): Promise<any> {
//     return getUniversitiesByCountry.call(this, country)
//   }
// }

import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class UniversitiesClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://universities.hipolabs.com/', context, {
      ...options,
    })
  }

  public async getUniversities(country: string | string[]) {
    const universityResponse = await this.http.get(`search?country=${country}`)

    return universityResponse
  }
}
