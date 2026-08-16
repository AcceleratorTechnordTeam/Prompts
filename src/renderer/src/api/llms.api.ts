// api/llms.api.ts
import { queryOptions, useQuery } from '@tanstack/react-query'
import { formatSize } from '../lib/function/formatSize'
import { ollama } from './client'

// ─── Fetchers ─────────────────────────────────────────────────────────────────

const getLlms = () => ollama.get<ListResponse>('/api/tags')

// ─── Query Options ────────────────────────────────────────────────────────────

export const ollamaVersionQuery = queryOptions({
  queryKey: ['ollama-llms'],
  queryFn: () => getLlms(),
  select: (data) => data.models,
  staleTime: 60 * 5 * 1000, // 5 minutes
  refetchInterval: false, // 1 minute
  refetchIntervalInBackground: true,
  enabled: true,
  refetchOnReconnect: true
})

// ─── Hooks ───────────────────────────────────────────────────────────────────

export const useLlms = () => {
  const { data, ...rest } = useQuery(ollamaVersionQuery)
  const content = data?.map(({ details, model, size, capabilities }) => ({
    id: model,
    size: details.parameter_size,
    weight: formatSize(size),
    capabilities: capabilities
  }))

  return { llms: data ?? [], content: content ?? [], ...rest }
}
