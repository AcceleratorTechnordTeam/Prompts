import { useState } from 'react'
import { ResultDisplayer } from '../../components/resultDisplayer/ResultDisplayer'
import { useColumnManager } from '../../components/ui/table/hooks/useColumnManager'
import { MyTable } from '../../components/ui/table/Table'
import { history_table_config, TABLE_ID } from '../../config/history'
// import { useHistoryData } from '../../lib/hooks/useHistoryData'
import { useHistoryData } from '../../lib/hooks/useHistoryData'
import { useRemoveHistoryRow } from '../../lib/hooks/useRemoveHistoryRow'
import styles from './history.module.css'

export const History = () => {
  const [responses, setResponses] = useState<HistorySelection[]>([])
  const { rows, columns } = useHistoryData()

  const enhancedRows = useRemoveHistoryRow(rows)
  const cols = useColumnManager({
    tableID: TABLE_ID,
    columns: columns,
    customizableOptions: history_table_config
  })

  const handleRowChange = (data: OllamaHistoryResponseFormatted[]) =>
    setResponses(
      data.map(({ model, fullResponse, fullPrompt, hash }) => ({
        model,
        response: fullResponse,
        prompt: fullPrompt,
        hash
      }))
    )

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <MyTable
          tableID={TABLE_ID}
          rowData={enhancedRows}
          columnData={cols}
          fontSize={0.8}
          rowPerPage={[5, 10]}
          maxSelectableRows={99}
          onSelectedRowChange={handleRowChange}
        />
      </div>

      <ResultDisplayer content={responses} />
    </div>
  )
}
