export const TABLE_ID = 'OllamaHistoryTable'
export const OLLAMA_HISTORY_QUERRY_KEY = ['ollama_responses']
export const HISTORY_TABLE_HIDDEN_COLUMNS = [
  'ID',
  'fullPrompt',
  'fullResponse',
  'hash',
  'prompt_eval_count',
  'eval_count'
]
export const history_table_config: Record<string, Partial<SuperTableColumnOptions>> = {
  ID: {
    width: [50, 50],
    sortable: false,
    highlighted: '',
    hideable: false,
    align: 'center'
  },
  model: {
    width: [100, 200],
    sortable: false,
    highlighted: '',
    hideable: false,
    align: 'center'
  },
  prompt: {
    width: [150, 150],
    sortable: false,
    highlighted: ' ',
    hideable: false,
    align: 'center'
  },
  response: {
    width: [150, 150],
    sortable: false,
    highlighted: 'var(--accent)',
    hideable: false,
    align: 'center'
  },
  supprimer: {
    width: undefined,
    sortable: false,
    highlighted: '',
    hideable: false,
    align: 'center'
  }
}
