import { ipcMain } from 'electron'
import db from './db'

export function registerDbHandlers() {
  ipcMain.removeHandler('db:getAll')
  ipcMain.removeHandler('db:insert')
  ipcMain.removeHandler('db:delete')

  // Get ALL
  ipcMain.handle('db:getAll', () => {
    return db.prepare('SELECT * FROM ollama_responses').all()
  })

  // Insert Row
  ipcMain.handle('db:insert', (_, data: any) => {
    return db
      .prepare(
        `
      INSERT INTO ollama_responses 
      (created_at, done_reason, eval_count, eval_duration, load_duration, model, prompt, prompt_eval_count, prompt_eval_duration, response, total_duration)
      VALUES
      (@created_at, @done_reason, @eval_count, @eval_duration, @load_duration, @model, @prompt, @prompt_eval_count, @prompt_eval_duration, @response, @total_duration)
    `
      )
      .run(data)
  })

  // Delete Row
  ipcMain.handle('db:delete', (_, id: number) => {
    return db.prepare('DELETE FROM ollama_responses WHERE id = ?').run(id)
  })
}
