import { formatProgressBarLabel } from '../../../lib/function/formatProgressBarLabel'
import styles from './progressIndicator.module.css'

type progressIndicatorProps = {
  inferenceStep: number
  nbsOfLlms: number
  model: string
}

export const ProgressIndicator = ({
  inferenceStep = 0,
  nbsOfLlms = 0,
  model = ''
}: progressIndicatorProps) => {
  const progressBarLabel = formatProgressBarLabel(inferenceStep, nbsOfLlms, model)
  const progressBarValue = Math.round(Number((100 / nbsOfLlms) * inferenceStep) || 0)

  return (
    <div className={styles.Container} data-is-model-running={model ? 'True' : 'False'}>
      <span className={styles.Label}>{progressBarLabel}</span>
      <span className={styles.Value}>{`${progressBarValue}%`}</span>
    </div>
  )
}
