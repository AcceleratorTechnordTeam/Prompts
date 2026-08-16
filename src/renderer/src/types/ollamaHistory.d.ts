// From DB
type OllamaHistory = {
  created_at: string
  done_reason: string
  eval_count: number
  eval_duration: number
  ID: number
  load_duration: number
  response: string
  model: string
  prompt: string
  prompt_eval_count: number
  prompt_eval_duration: number
  response: string
  total_duration: number
}

type OllamaHistoryResponseFormatted = {
  created_at: string
  eval_count: number
  eval_duration: string
  ID: number
  load_duration: string
  response: string
  model: string
  prompt: string
  fullPrompt: string
  fullResponse: string
  prompt_eval_count: number
  total_duration: string
  hash: string
}

type HistorySelection = {
  model: string
  response: string
  prompt: string
  hash: string
}
