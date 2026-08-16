type OllamaCatalog = {
  id: string
  family: string
  description: string
}

type OllamaLocalModel = {
  id: string
  size: string
  weight: string
  capabilities?: string[]
}

type MergedOllamaModel = {
  id: string
  installed: boolean
  family: string
  description: string
  size?: string
  weight?: string
  capabilities?: string[]
}
