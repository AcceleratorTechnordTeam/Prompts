// api/llms.api.ts
import { queryOptions, useQuery } from '@tanstack/react-query'
import { ollama } from './client'

// ─── Fetchers ─────────────────────────────────────────────────────────────────

const getOllamaVersion = () => ollama.get<VersionResponse>('/api/version')

// ─── Query Options ────────────────────────────────────────────────────────────

export const llmsQuery = queryOptions({
  queryKey: ['ollama-version'],
  queryFn: () => getOllamaVersion(),
  select: (data) => data.version,
  staleTime: 60 * 60 * 1000, // 1 heure
  refetchInterval: false,
  refetchIntervalInBackground: false
})

// ─── Hooks ───────────────────────────────────────────────────────────────────

export const useOllamaVersion = () => {
  const { data } = useQuery(llmsQuery)
  const isOllamaRun = !!data
  const ollamaVersion = data

  return { isOllamaRun: isOllamaRun, ollamaVersion: ollamaVersion }
}
