import { z } from 'zod'

export const mainFormSchema = z.object({
  systemePrompt: z.string().min(1, 'Le prompt système est requis'),
  userPrompt: z.string().min(1, 'Le prompt utilisateur est requis'),
  models: z.array(z.custom<OllamaModel>()).min(1, 'Au moins un modèle requis')
})

export type FormValues = z.infer<typeof mainFormSchema>

export type ExtendedFormValues = FormValues & { extractedModels: string[] }
