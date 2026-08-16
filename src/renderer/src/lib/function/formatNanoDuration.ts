export function nanoToDuration(nanoseconds: number) {
  if (!Number.isFinite(nanoseconds) || nanoseconds < 0) {
    return 0
  }

  const seconds = nanoseconds / 1_000_000_000

  return Math.round(seconds * 1000) / 1000
}
