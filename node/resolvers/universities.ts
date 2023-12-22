interface Args {
  country: string
}

interface University {
  name: string
  domains: [string]
  state_province: string | undefined
  web_pages: [string]
  country: string
  alpha_two_code: string
  'state-province'?: string
}

export async function getUniversitiesResolver(
  _: unknown,
  { country }: Args,
  ctx: Context
) {
  const {
    clients: { getUniversities },
    vtex: { logger },
  } = ctx

  const universities: University[] = await getUniversities.getUniversities(
    country
  )

  logger.info(
    JSON.stringify({
      message: 'Universities',
      universities,
    })
  )

  return universities.map((university: University) => {
    university.state_province = university['state-province']
    delete university['state-province']

    return university
  })
}
