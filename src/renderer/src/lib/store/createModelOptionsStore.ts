import type { StateCreator } from 'zustand'
import { OptionsFormValues } from '../../components/optionsForm/optionsForm.schema'

type ModelOptionsMap = Record<string, OptionsFormValues>

export interface ModelOptionsStore {
  modelOptions: ModelOptionsMap
  setModelOptions: (modelName: string, options: OptionsFormValues) => void
  getModelOptions: (modelName: string) => OptionsFormValues | undefined
}

export const createModelOptionsStore: StateCreator<ModelOptionsStore> = (set, get) => ({
  modelOptions: {},
  setModelOptions: (modelName, options) =>
    set((state) => ({
      modelOptions: { ...state.modelOptions, [modelName]: options }
    })),
  getModelOptions: (modelName) => get().modelOptions[modelName]
})
