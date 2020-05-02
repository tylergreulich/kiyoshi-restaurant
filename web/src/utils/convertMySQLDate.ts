export const convertMySQLDate = (date: string) => {
  const newDate = new Date(date)

  const convertedDate =
    newDate.getMonth() +
    1 +
    '/' +
    newDate.getDate() +
    '/' +
    newDate.getFullYear()

  return { convertedDate }
}
