import { hashText } from './hashText'

const epochToHHMMSS = (epoch: number): string => {
  const totalSeconds = Math.floor(epoch / 1e9)
  const h = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, '0')
  const m = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const s = (totalSeconds % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}

export const formatResponses = (responses: OllamaHistory[]): OllamaHistoryResponseFormatted[] => {
  const result = responses.map(
    ({
      created_at,
      eval_count,
      eval_duration,
      ID,
      load_duration,
      model,
      prompt,
      response,
      prompt_eval_count,
      total_duration
    }) => ({
      ID,
      model,
      fullPrompt: prompt,
      fullResponse: response,
      prompt: prompt?.slice(0, 20) ?? prompt,
      response: response?.slice(0, 20) ?? response,
      created_at: new Date(created_at).toLocaleDateString('fr-FR'),
      prompt_eval_count,
      eval_count,
      eval_duration: epochToHHMMSS(eval_duration),
      load_duration: epochToHHMMSS(load_duration),
      total_duration: epochToHHMMSS(total_duration),
      hash: hashText(prompt)
    })
  )

  return result
}
