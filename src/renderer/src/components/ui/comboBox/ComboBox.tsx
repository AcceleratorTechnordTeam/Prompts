import { Combobox } from '@base-ui/react/combobox'
import { Check, X } from 'lucide-react'
import { useId } from 'react'
import styles from './comboBox.module.css'

type ComboBoxProps<T> = {
  label?: string
  items?: T[]
  value?: NoInfer<T>[]
  name?: string
  description?: string
  placeholder?: string
  emptyMessage?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  inUseModel?: string
  onValueChange?: (value: NoInfer<T>[]) => void
  getItemLabel?: (item: T) => string
  getItemKey?: (item: T) => string | number
}

export const ComboBox = <T,>({
  label,
  items = [],
  value,
  description,
  name,
  placeholder = 'Search ...',
  emptyMessage = 'No results found.',
  disabled = false,
  readOnly = false,
  required = false,
  inUseModel = '',
  onValueChange,
  getItemLabel = (item) => String((item as Record<string, unknown>).value ?? ''),
  getItemKey = (item) => String((item as Record<string, unknown>).id ?? '')
}: ComboBoxProps<T>) => {
  const id = useId()

  return (
    <Combobox.Root
      items={items as unknown[]}
      multiple
      value={value as unknown[]}
      onValueChange={onValueChange as (value: unknown[]) => void}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      isItemEqualToValue={(item, val) => getItemKey(item as T) === getItemKey(val as T)}
    >
      <div className={styles.Container}>
        {label && (
          <label className={styles.Label} htmlFor={id}>
            {label}
            {required && (
              <span aria-hidden="true" className={styles.Requiered}>
                *
              </span>
            )}
          </label>
        )}
        <Combobox.InputGroup className={styles.InputGroup}>
          <Combobox.Chips className={styles.Chips}>
            <Combobox.Value>
              {(selectedValues) => (
                <>
                  {selectedValues.map((item) => {
                    const isUsed = item.model === inUseModel

                    return (
                      <Combobox.Chip
                        key={getItemKey(item as T)}
                        className={styles.Chip}
                        data-in-use-model={isUsed}
                        aria-label={getItemLabel(item as T)}
                      >
                        {getItemLabel(item as T)}
                        <Combobox.ChipRemove
                          className={styles.ChipRemove}
                          aria-label={`Remove ${getItemLabel(item as T)}`}
                        >
                          <X size={20} />
                        </Combobox.ChipRemove>
                      </Combobox.Chip>
                    )
                  })}
                  <Combobox.Input
                    id={id}
                    placeholder={selectedValues.length > 0 ? '' : placeholder}
                    className={styles.Input}
                    required={required}
                  />
                </>
              )}
            </Combobox.Value>
          </Combobox.Chips>
        </Combobox.InputGroup>
        {description && <div className={styles.Description}>{description}</div>}
      </div>

      <Combobox.Portal>
        <Combobox.Positioner className={styles.Positioner} sideOffset={4}>
          <Combobox.Popup className={styles.Popup}>
            <Combobox.Empty>
              <div className={styles.Empty}>{emptyMessage}</div>
            </Combobox.Empty>
            <Combobox.List>
              {(item) => (
                <Combobox.Item key={getItemKey(item as T)} className={styles.Item} value={item}>
                  <Combobox.ItemIndicator className={styles.ItemIndicator}>
                    <Check size={14} />
                  </Combobox.ItemIndicator>
                  <span className={styles.ItemText}>{getItemLabel(item as T)}</span>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  )
}
