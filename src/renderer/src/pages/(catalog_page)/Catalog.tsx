import { useState } from 'react'
import { toast } from 'sonner'
import { useLlms } from '../../api/llms.api'
import { usePullModel } from '../../api/pullModel.api'
import { CatalogCard } from '../../components/catalogCard/CatalogCard'
import { OptionsForm } from '../../components/optionsForm/OptionsForm'
import { BottomDrawer } from '../../components/ui/drawer/BottomDrawer'
import { ollamaCatalog } from '../../config/ollamaCatalog'
import { queryClient } from '../../lib/client/querryClient'
import { mergeOllamaModels } from '../../lib/function/mergeOllamaModels'
import styles from './catalog.module.css'

export const Catalog = () => {
  const { content } = useLlms()
  const [modelId, setModelId] = useState<string>('')
  const [openDrawer, setOpenDrawer] = useState(false)
  const mergedCatalog = mergeOllamaModels(ollamaCatalog, content)

  const { pullModel, isPending } = usePullModel({
    onMutate: (variables) => setModelId(variables.model),
    onSuccess: async (data) => {
      toast.success(`${data.status} : Work done`)
      await queryClient.invalidateQueries({ queryKey: ['ollama-llms'] })
    },
    onError: (error) => toast.error(error.message),
    onSettled: () => setModelId('')
  })

  const handlePullModel = (id: string) => {
    if (!id) return
    pullModel({ model: id })
  }

  const handleModelSettings = (id: string) => {
    if (!id) return
    setModelId(id)
    setOpenDrawer(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        {mergedCatalog.map((model) => {
          return (
            <CatalogCard
              key={`catalog-card-${model.id}`}
              id={model.id}
              family={model.family}
              description={model.description}
              capabilities={model.capabilities}
              size={model.size}
              weight={model.weight}
              installed={model.installed}
              isPending={isPending && modelId === model.id}
              onClick={() => handlePullModel(model.id)}
              onDisplay={() => handleModelSettings(model.id)}
            />
          )
        })}
      </div>
      <BottomDrawer
        open={openDrawer}
        onOpenChange={setOpenDrawer}
        title={`Model settings: ${modelId}`}
        description="Adjust setting paremeters"
      >
        <OptionsForm targetModel={modelId} onCloseDrawer={() => setOpenDrawer(false)} />
      </BottomDrawer>
    </div>
  )
}
