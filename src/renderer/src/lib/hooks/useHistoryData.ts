import { useQuery } from '@tanstack/react-query'
import { HISTORY_TABLE_HIDDEN_COLUMNS, OLLAMA_HISTORY_QUERRY_KEY } from '../../config/history'
import { formatResponses } from '../function/formatHistoryFromDb'

export const useHistoryData = () => {
  const query = useQuery<OllamaHistory[]>({
    queryKey: OLLAMA_HISTORY_QUERRY_KEY,
    queryFn: () => window.api.getAll()
  })

  const response = query?.data ?? []
  const formattedResponses = formatResponses(response)
  const firstRow = formattedResponses[0] || []

  const keys = [...new Set([...Object.keys(firstRow), 'supprimer'])].filter(
    (key) => !HISTORY_TABLE_HIDDEN_COLUMNS.includes(key)
  )

  return {
    rows: formattedResponses,
    columns: keys,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error
  }
}
