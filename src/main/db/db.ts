import Database from 'better-sqlite3'
import { app } from 'electron'
import path from 'path'

const DB_PATH = path.join(app.getPath('userData'), 'app.db')

const sqldb: Database.Database = new Database(DB_PATH)

sqldb.pragma('journal_mode = WAL')
sqldb.pragma('foreign_keys = ON')

sqldb.exec(`
  CREATE TABLE IF NOT EXISTS ollama_responses (
    ID                   INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at           TEXT    NOT NULL,
    done_reason          TEXT    NOT NULL,
    eval_count           INTEGER NOT NULL,
    eval_duration        INTEGER NOT NULL,
    load_duration        INTEGER NOT NULL,
    model                TEXT    NOT NULL,
    prompt               TEXT    NOT NULL,
    prompt_eval_count    INTEGER NOT NULL,
    prompt_eval_duration INTEGER NOT NULL,
    response             TEXT    NOT NULL,
    total_duration       INTEGER NOT NULL
  );
`)

console.info('DB Path:', DB_PATH)

export default sqldb
