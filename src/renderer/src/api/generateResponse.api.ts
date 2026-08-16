import { MutationOptions, useMutation } from '@tanstack/react-query'
import { ollama } from './client'

// ─── Fetchers ─────────────────────────────────────────────────────────────────

const postInference = (payload: InferencePayload) =>
  ollama.post<OllamaInferenceResponse>('/api/generate', { ...payload, stream: false })

// ─── Mutation Options ────────────────────────────────────────────────────────────

// ─── Hooks ───────────────────────────────────────────────────────────────────

export const useInference = (
  options?: MutationOptions<OllamaInferenceResponse, Error, InferencePayload>
) => {
  const { mutate, mutateAsync, data, isPending, isError, isSuccess } = useMutation({
    mutationFn: postInference,
    ...options
  })

  return {
    generate: mutate,
    generateAsync: mutateAsync,
    response: data?.response ?? null,
    isPending,
    isError,
    isSuccess
  }
}
