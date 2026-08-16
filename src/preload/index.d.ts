import { ElectronAPI } from '@electron-toolkit/preload'

export interface CustomAPI {
  getAll: () => Promise<OllamaHistory[]>
  insert: (data: unknown) => Promise<unknown>
  delete: (id: number) => Promise<unknown>
  window: {
    minimize: () => void
    maximize: () => void
    close: () => void
  }
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: CustomAPI
  }
}
