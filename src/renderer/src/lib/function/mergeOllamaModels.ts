export function mergeOllamaModels(
  catalog: OllamaCatalog[] = [],
  localModels: OllamaLocalModel[] = []
): MergedOllamaModel[] {
  const localById = new Map(localModels.map((model) => [model.id, model]))

  return catalog
    .map((entry) => {
      const local = localById.get(entry.id)

      return {
        ...entry,
        installed: Boolean(local),
        label: local?.id,
        size: local?.size,
        weight: local?.weight,
        capabilities: local?.capabilities
      }
    })
    .sort((a, b) => Number(b.installed) - Number(a.installed))
}
