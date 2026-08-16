import { useMutation, useQueryClient } from '@tanstack/react-query'
import { OLLAMA_HISTORY_QUERRY_KEY } from '../../config/history'

type UseDeleteOptions = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const useDelete = ({ onSuccess, onError }: UseDeleteOptions = {}) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id: number) => window.api.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: OLLAMA_HISTORY_QUERRY_KEY })
      onSuccess?.()
    },
    onError: (error: Error) => {
      console.error(error.message)
      onError?.(error)
    }
  })

  return {
    deleteResponse: (id: number) => mutation.mutate(id),
    isDeleting: mutation.isPending,
    isError: mutation.isError
  }
}
