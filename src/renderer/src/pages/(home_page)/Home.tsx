import { useState } from 'react'
import { toast } from 'sonner'
import { useInference } from '../../api/generateResponse.api'
import { MainForm } from '../../components/mainForm/MainForm'
import { ExtendedFormValues } from '../../components/mainForm/mainForm.schema'
import { ProgressIndicator } from '../../components/ui/progressBar/ProgressIndicator'
import { formatLlmResponse } from '../../lib/function/formatLlmResponse'
import { useBoundStore } from '../../lib/store/useBoundStore'
import styles from './home.module.css'

export const Home = () => {
  const { getModelOptions } = useBoundStore()

  const [model, setModel] = useState('')
  const [prompt, setPrompt] = useState('')
  const [nbsOfLlms, setNbsOfLlms] = useState(0)
  const [inferenceStep, setInferenceStep] = useState(0)

  // const [durationData, setDurationData] = useState<DurationChart[]>([])

  const { generateAsync, isPending } = useInference({
    onMutate: (variables) => {
      setModel(variables.model)
    },
    onSuccess: (data) => {
      console.log(data)

      const formatedData = formatLlmResponse(data, prompt)
      window.api.insert(formatedData)

      // setDurationData((prev) => [
      //   ...prev,
      //   {
      //     model: formatedData.model,
      //     prompt_eval_duration: nanoToDuration(formatedData.prompt_eval_duration),
      //     eval_duration: nanoToDuration(formatedData.eval_duration),
      //     total_duration: nanoToDuration(formatedData.total_duration)
      //   }
      // ])
      setInferenceStep((prev) => prev + 1)
      toast(`${model} : Work done`)
    },
    onError: (error) => {
      console.error(error.message)
    },
    onSettled: () => {
      setModel('')
    }
  })

  const handleSubmitForm = async (data: ExtendedFormValues) => {
    const prompt = [data.systemePrompt, data.userPrompt].join('\n')
    const llmsCount = data?.extractedModels?.length

    setInferenceStep(0)
    setPrompt(prompt)
    setNbsOfLlms(llmsCount)

    for (const model of data.extractedModels) {
      const modelOptions = getModelOptions(model)
      await generateAsync({ model, prompt, options: { ...modelOptions } })
    }
  }

  return (
    <div className={styles.Container}>
      <ProgressIndicator inferenceStep={inferenceStep} nbsOfLlms={nbsOfLlms} model={model} />
      <MainForm
        isLoading={isPending}
        onSubmitForm={handleSubmitForm}
        inUseModel={model}
        isInferenceEnded={inferenceStep === nbsOfLlms && inferenceStep > 0}
      />
    </div>
  )
}
