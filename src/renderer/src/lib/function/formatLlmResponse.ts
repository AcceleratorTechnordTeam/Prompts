// LLM response => DB insert
export const formatLlmResponse = (data: OllamaInferenceResponse, prompt: string) => {
  const {
    model,
    created_at,
    response,
    done_reason,
    total_duration,
    load_duration,
    prompt_eval_count,
    prompt_eval_duration,
    eval_count,
    eval_duration
  } = data
  return {
    model,
    created_at,
    response,
    done_reason,
    total_duration,
    load_duration,
    prompt_eval_count,
    prompt_eval_duration,
    eval_count,
    eval_duration,
    prompt
  }
}
