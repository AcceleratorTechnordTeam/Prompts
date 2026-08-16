import { Button } from '@base-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useBoundStore } from '../../lib/store/useBoundStore'
import { SliderField } from '../ui/sliderField/SliderField'
import styles from './optionsForm.module.css'
import { OptionsFormValues, optionsFormSchema } from './optionsForm.schema'

type OptionsFormProps = {
  defaultValues?: Partial<OptionsFormValues>
  targetModel?: string
  onCloseDrawer: () => void
}

export const OptionsForm = ({
  defaultValues,
  targetModel = '',
  onCloseDrawer
}: OptionsFormProps) => {
  const { setModelOptions, getModelOptions } = useBoundStore()
  const { handleSubmit, control } = useForm<OptionsFormValues>({
    resolver: zodResolver(optionsFormSchema),
    defaultValues: {
      temperature: 1,
      top_p: 0.5,
      ...getModelOptions(targetModel),
      ...defaultValues
    }
  })

  const onSubmit = (data: OptionsFormValues) => {
    if (!data && !targetModel) return
    setModelOptions(targetModel, data)
    onCloseDrawer()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        control={control}
        name="temperature"
        render={({ field: { onChange, value, name } }) => (
          <SliderField
            label="Temperature"
            description="Créativité du modèle · 0 = déterministe, 2 = chaotique"
            name={name}
            value={value}
            onValueChange={onChange}
            step={0.1}
            min={0}
            max={2}
          />
        )}
      />

      <Controller
        control={control}
        name="top_p"
        render={({ field: { onChange, value, name } }) => (
          <SliderField
            label="Top P"
            description="Diversité du vocabulaire · 0 = plus restreint, 1 = plus large"
            name={name}
            value={value}
            onValueChange={onChange}
            step={0.05}
            min={0}
            max={1}
          />
        )}
      />

      <Button className={styles.button} type="submit">
        Apply
      </Button>
    </form>
  )
}
