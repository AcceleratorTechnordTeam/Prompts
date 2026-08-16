export const formatSize = (bytes: number): string => {
  const gb = bytes / 1_000_000_000
  return `${gb.toFixed(1)} GB`
}
