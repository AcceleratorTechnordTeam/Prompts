import { z } from 'zod'

export const optionsFormSchema = z.object({
  temperature: z.number().min(0).max(2),
  top_p: z.number().min(0).max(1)
  // seed: z.number().int().min(0)
})

export type OptionsFormValues = z.infer<typeof optionsFormSchema>

export type ExtendedOptionsFormValues = OptionsFormValues & { model: string }
