import { v5 as uuidv5 } from 'uuid'

const NAMESPACE = uuidv5.URL

export const hashText = (text: string): string => {
  if (!text?.trim()) throw new Error('hashText: text is required')
  return uuidv5(text.trim().toLowerCase(), NAMESPACE)
}
