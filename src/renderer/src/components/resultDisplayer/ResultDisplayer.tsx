import styles from './ResultDisplayer.module.css'

type ResultDisplayerProps = {
  content: HistorySelection[]
}

export const ResultDisplayer = ({ content = [] }: ResultDisplayerProps) => {
  if (!content.length) return null

  const groupedByHash = Object.values(
    content.reduce<Record<string, HistorySelection[]>>(
      (acc, item) => ({
        ...acc,
        [item.hash]: [...(acc[item.hash] ?? []), item]
      }),
      {}
    )
  )

  return (
    <div className={styles.container}>
      {groupedByHash.map((group) => (
        <div key={group[0].hash} className={styles.wrapper}>
          <p className={styles.prompt}>{group[0].prompt}</p>
          <div className={styles.responses}>
            {group.map(({ model, response, hash }) => (
              <div key={`${hash}-${model}`} className={styles.responseCard}>
                <span className={styles.model}>{model}</span>
                <p className={styles.response}>{response}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
