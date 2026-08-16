import { Button } from '@base-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, RotateCcw } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import { useLlms } from '../../api/llms.api'
import { Card } from '../card/Card'
import { ComboBox } from '../ui/comboBox/ComboBox'
import { TextArea } from '../ui/textArea/TextArea'
import styles from './mainForm.module.css'
import { FormValues, mainFormSchema } from './mainForm.schema'

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
    formState: { errors, isValid, isDirty }
  } = useForm<FormValues>({
    resolver: zodResolver(mainFormSchema),
    mode: 'onChange',
    defaultValues: {
      systemePrompt: '',
      userPrompt: '',
      models: []
    }
  })

  const onSubmit = (data: FormValues) => {
    if (isValid) {
      onSubmitForm({
        ...data,
        extractedModels: data.models.map(({ model }) => model)
      })
    }
  }

  const handleResetSystemPrompt = () => {
    setValue('systemePrompt', '', { shouldDirty: true, shouldValidate: true })
  }

  const handleResetUserPrompt = () => {
    setValue('userPrompt', '', { shouldDirty: true, shouldValidate: true })
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
          <Button
            className={styles.reset}
            type="button"
            onClick={handleResetSystemPrompt}
            disabled={isLoading || (!isDirty && !isValid)}
          >
            <RotateCcw size={18} />
          </Button>
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
          <Button
            className={styles.reset}
            type="button"
            onClick={handleResetUserPrompt}
            disabled={isLoading || (!isDirty && !isValid)}
          >
            <RotateCcw size={18} />
          </Button>
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
