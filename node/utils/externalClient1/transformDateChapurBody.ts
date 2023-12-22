// Function to convert VTEX date to Chapur date format:
export const transformDate = (month: string, year: string): string => {
  const yearString: string = year.slice(-2)

  const dateChapur = `${month}${yearString}`

  return dateChapur
}
