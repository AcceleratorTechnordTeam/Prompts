import { useLlms } from '../../api/llms.api'
import { ollamaCatalog } from '../../config/ollamaCatalog'
import { mergeOllamaModels } from '../function/mergeOllamaModels'

export const useModelCatalog = () => {
  const { content } = useLlms()
  const mergedCatalog = mergeOllamaModels(ollamaCatalog, content)
  return mergedCatalog
}
