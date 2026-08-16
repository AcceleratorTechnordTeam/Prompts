export const formatTokens = (contextLength: number): string => {
  if (!contextLength) {
    return `?`
  }
  return `${Math.round(contextLength / 1000)}k tokens`
}
