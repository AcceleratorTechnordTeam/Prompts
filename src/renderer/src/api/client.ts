// api/client.ts
const ollamaBase = 'http://localhost:11434'

const fetchWithTimeout = async (url: string, timeout = 15000, init?: RequestInit) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, { ...init, signal: controller.signal })
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    return response
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Délai dépassé (${timeout}ms) — Ollama ne répond pas`)
    }
    if (error instanceof TypeError) {
      throw new Error('Impossible de contacter Ollama — le service est-il démarré ?')
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}

const get = <T>(url: string): Promise<T> =>
  fetchWithTimeout(url, 15000, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then((r) => r.json())

const post = <T>(url: string, body: unknown): Promise<T> =>
  fetchWithTimeout(url, 120000, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then((r) => r.json())

export const ollama = {
  get: <T>(url: string) => get<T>(`${ollamaBase}${url}`),
  post: <T>(url: string, body: unknown) => post<T>(`${ollamaBase}${url}`, body)
}
