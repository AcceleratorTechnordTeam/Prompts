import { NumberField } from '@base-ui/react/number-field'
import { Minus, Plus } from 'lucide-react'
import { useId } from 'react'
import styles from './inputNumber.module.css'

type InputNumberProps = {
  label: string
  description?: string
  name: string
  value: number
  onValueChange: (value: number | null) => void
}

export const InputNumber = ({
  label,
  description,
  name,
  value = 0,
  onValueChange
}: InputNumberProps) => {
  const id = useId()
  return (
    <div>
      <NumberField.Root
        id={id}
        value={value}
        onValueChange={onValueChange}
        className={styles.Field}
      >
        <NumberField.ScrubArea className={styles.ScrubArea}>
          <label htmlFor={id} className={styles.Label}>
            {label}
          </label>
          <NumberField.ScrubAreaCursor className={styles.ScrubAreaCursor}>
            <CursorGrowIcon />
          </NumberField.ScrubAreaCursor>
        </NumberField.ScrubArea>

        <NumberField.Group className={styles.Group}>
          <NumberField.Decrement className={styles.Decrement}>
            <Minus />
          </NumberField.Decrement>
          <NumberField.Input className={styles.Input} name={name} />
          <NumberField.Increment className={styles.Increment}>
            <Plus />
          </NumberField.Increment>
        </NumberField.Group>
      </NumberField.Root>
      {description && <p>{description}</p>}
    </div>
  )
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  )
}
