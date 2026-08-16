// api/llms.api.ts
import { MutationOptions, useMutation } from '@tanstack/react-query'
import { ollama } from './client'

// ─── Fetchers ─────────────────────────────────────────────────────────────────

const pullModel = (payload: PullModelPayload) =>
  ollama.post<PullModelResponse>('/api/pull', { ...payload, stream: false, insecure: true })

// ─── Query Options ────────────────────────────────────────────────────────────

// ─── Hooks ───────────────────────────────────────────────────────────────────

export const usePullModel = (
  options?: MutationOptions<PullModelResponse, Error, PullModelPayload>
) => {
  const { mutate, mutateAsync, data, isPending, isError, isSuccess } = useMutation({
    mutationFn: pullModel,
    ...options
  })

  return {
    pullModel: mutate,
    pullModelAsync: mutateAsync,
    status: data?.status ?? null,
    isPending,
    isError,
    isSuccess
  }
}
