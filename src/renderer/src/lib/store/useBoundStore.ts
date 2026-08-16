import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createModelOptionsStore, type ModelOptionsStore } from './createModelOptionsStore'

type CompleteStore = ModelOptionsStore

export const useBoundStore = create<CompleteStore>()(
  persist(
    (...a) => ({
      ...createModelOptionsStore(...a)
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        modelOptions: state.modelOptions
      })
    }
  )
)
