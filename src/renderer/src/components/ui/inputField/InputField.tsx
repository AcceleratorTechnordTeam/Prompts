import { Field, Input } from '@base-ui/react'
import styles from './inputField.module.css'

type InputFieldProps = {
  label?: string
  description?: string
  errorMessage?: string
  value?: string
  name?: string
  placeholder?: string
  required?: boolean
  ref?: React.Ref<HTMLInputElement>
  onChange?: (value: string) => void
  onBlur?: () => void
}

export const InputField = ({
  label,
  description,
  errorMessage,
  value,
  name,
  placeholder,
  required,
  ref,
  onChange,
  onBlur
}: InputFieldProps) => {
  return (
    <Field.Root className={styles.Field}>
      {label && <Field.Label className={styles.Label}>{label}</Field.Label>}
      <Input
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        className={styles.Input}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
      />
      {errorMessage && <Field.Error className={styles.Error}>{errorMessage}</Field.Error>}
      {description && (
        <Field.Description className={styles.Description}>{description}</Field.Description>
      )}
    </Field.Root>
  )
}
