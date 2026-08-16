export const formatProgressBarLabel = (inferenceStep: number, nbsOfLlms: number, model: string) => {
  if (inferenceStep === nbsOfLlms && inferenceStep > 0) return 'Finish'
  return model || 'Waiting for your model ...'
}
