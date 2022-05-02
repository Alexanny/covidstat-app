export const camelCaseToSentenceCase = (string: string = ''): string => {
  const title = string.replace(/([A-Z])/g, ' $1')
  return title.charAt(0).toUpperCase() + title.slice(1)
}
