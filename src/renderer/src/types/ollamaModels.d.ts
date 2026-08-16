type ModelDetails = {
  context_length: number
  embedding_length: number
  families: string[]
  family: string
  format: string
  parameter_size: string
  parent_model: string
  quantization_level: string
}

type OllamaModel = {
  capabilities: string[]
  details: ModelDetails
  digest: string
  model: string
  modified_at: string
  name: string
  size: number
}

type ListResponse = {
  models: OllamaModel[]
}
