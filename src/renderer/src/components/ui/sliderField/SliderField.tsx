import { Slider } from '@base-ui/react/slider'
import styles from './SliderField.module.css'

type SliderFieldProps = {
  label: string
  description?: string
  name: string
  value: number
  onValueChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export const SliderField = ({
  label,
  description,
  name,
  value,
  onValueChange,
  min = 0,
  max = 1,
  step = 0.01
}: SliderFieldProps) => (
  <div className={styles.wrapper}>
    <div className={styles.labelRow}>
      {label && <label className={styles.label}>{label}</label>}
      <span className={styles.value}>{value}</span>
    </div>
    {description && <p className={styles.description}>{description}</p>}
    <Slider.Root
      name={name}
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
    >
      <Slider.Control className={styles.control}>
        <Slider.Track className={styles.track}>
          <Slider.Indicator className={styles.indicator} />
          <Slider.Thumb aria-label={label} className={styles.thumb} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  </div>
)
