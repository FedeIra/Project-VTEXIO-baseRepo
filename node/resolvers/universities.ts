import type {
  Args,
  UniversityClientResponse,
  UniversityFinalResponse,
} from '../typings/index'

export async function getUniversitiesResolver(
  _: unknown,
  { country }: Args,
  { clients: { getUniversities }, vtex: { logger } }: Context
): Promise<UniversityFinalResponse[]> {
  try {
    // 1) Use get universities client to obtain universities:
    const universitiesClientResponse: UniversityClientResponse[] =
      await getUniversities.getUniversities(country)

    logger.info(
      JSON.stringify({
        message: 'Universities',
        universitiesClientResponse,
      })
    )

    // 2) Format response to obtain final response:
    const universitiesResponse: UniversityFinalResponse[] =
      universitiesClientResponse.map(
        (university: UniversityClientResponse) => ({
          ...university,
          state_province: university['state-province'],
        })
      )

    // 3) Return final response:
    return universitiesResponse
  } catch (error) {
    logger.error(
      JSON.stringify({ message: error.message, path: error.path, error })
    )
    throw new Error(error)
  }
}
