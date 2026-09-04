import { Button } from '@base-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Copy, Loader, Trash } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import { useLlms } from '../../api/llms.api'
import { Card } from '../card/Card'
import { ComboBox } from '../ui/comboBox/ComboBox'
import { TextArea } from '../ui/textArea/TextArea'
import styles from './mainForm.module.css'
import { FormValues, mainFormSchema } from './mainForm.schema'

const STORAGE_KEY = 'mainForm'

const getSavedValues = (): FormValues => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '')
  } catch {
    return { systemePrompt: '', userPrompt: '', models: [] }
  }
}

type MainFormProps = {
  isLoading: boolean
  inUseModel: string
  isInferenceEnded: boolean
  onSubmitForm: (data: FormValues & { extractedModels: string[] }) => void
}

export const MainForm = ({
  isLoading,
  inUseModel,
  isInferenceEnded,
  onSubmitForm
}: MainFormProps) => {
  const { llms } = useLlms()

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isValid, isDirty }
  } = useForm<FormValues>({
    resolver: zodResolver(mainFormSchema),
    mode: 'onChange',
    defaultValues: getSavedValues()
  })

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(watch()))

  const onSubmit = (data: FormValues) => {
    if (isValid) {
      onSubmitForm({
        ...data,
        extractedModels: data.models.map(({ model }) => model)
      })
    }
  }

  const handleResetValue = (id: 'systemePrompt' | 'userPrompt') => {
    setValue(id, '', { shouldDirty: true, shouldValidate: true })
  }

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      console.error('Failed to copy text to clipboard')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Controller
        control={control}
        name="models"
        render={({ field: { onChange, value, name } }) => (
          <ComboBox<OllamaModel>
            items={llms}
            onValueChange={onChange}
            value={value}
            name={name}
            inUseModel={inUseModel}
            getItemLabel={(item) => item.name}
            getItemKey={(item) => item.model}
            placeholder="Choose your models ..."
            description={errors.models?.message}
          />
        )}
      />

      <Card
        label="System prompt"
        button={
          <span className={styles.buttonGroup}>
            <Button
              className={styles.topButton}
              type="button"
              onClick={() => copyToClipboard(watch('systemePrompt'))}
            >
              <Copy size={18} />
            </Button>
            <Button
              className={styles.topButton}
              type="button"
              onClick={() => handleResetValue('systemePrompt')}
              disabled={isLoading || (!isDirty && !isValid)}
            >
              <Trash size={18} />
            </Button>
          </span>
        }
      >
        <Controller
          control={control}
          name="systemePrompt"
          render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => (
            <TextArea
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              placeholder="Type here ..."
              description={error?.message}
            />
          )}
        />
      </Card>

      <Card
        label="User Prompt"
        button={
          <span className={styles.buttonGroup}>
            <Button
              className={styles.topButton}
              type="button"
              onClick={() => copyToClipboard(watch('userPrompt'))}
            >
              <Copy size={18} />
            </Button>
            <Button
              className={styles.topButton}
              type="button"
              onClick={() => handleResetValue('userPrompt')}
              disabled={isLoading || (!isDirty && !isValid)}
            >
              <Trash size={18} />
            </Button>
          </span>
        }
      >
        <Controller
          control={control}
          name="userPrompt"
          render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => (
            <TextArea
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              placeholder="Type here ..."
              description={error?.message}
            />
          )}
        />
      </Card>
      <div className={styles.footer}>
        <Button
          className={styles.formButton}
          type="submit"
          disabled={!isValid || isLoading}
          data-hidden={!isValid}
        >
          {isLoading ? <Loader className={styles.Loader} /> : 'Start inference'}
        </Button>

        <NavLink
          to={isInferenceEnded ? '/history' : '#'}
          className={styles.formButton}
          data-hidden={!isInferenceEnded}
        >
          Check results
        </NavLink>
      </div>
    </form>
  )
}
