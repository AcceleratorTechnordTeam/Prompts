import { Field } from '@base-ui/react/field'
import styles from './textArea.module.css'

type TextAreaProps = {
  label?: string
  description?: string
  errorMessage?: string
  value?: string
  name?: string
  placeholder?: string
  ref?: React.Ref<HTMLTextAreaElement>
  onChange?: (value: string) => void
  onBlur?: () => void
}

export const TextArea = ({
  label,
  description,
  errorMessage,
  value,
  name,
  placeholder,
  ref,
  onChange,
  onBlur
}: TextAreaProps) => {
  return (
    <Field.Root className={styles.Field}>
      {label && <Field.Label className={styles.Label}>{label}</Field.Label>}
      <textarea
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
        className={styles.TextArea}
      />
      {errorMessage && <Field.Error className={styles.Error}>{errorMessage}</Field.Error>}
      {description && (
        <Field.Description className={styles.Description}>{description}</Field.Description>
      )}
    </Field.Root>
  )
}
