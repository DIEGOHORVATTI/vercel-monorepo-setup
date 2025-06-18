export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpFetchProps = RequestInit & {
  url: string
  method?: Uppercase<Method>
}

class HttpError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'HttpError'
    this.status = status
  }
}

export async function httpFetch<T>({ url, method = 'GET', ...options }: HttpFetchProps): Promise<T> {
  const defaultMimeType = 'application/json'

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': defaultMimeType,
      ...options?.headers
    },
    ...options
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const text = await response.text()

    throw new HttpError(text || response.statusText, response.status)
  }

  const contentType = response.headers.get('content-type')
  if (!contentType?.includes(defaultMimeType)) {
    return undefined as T
  }

  return response.json()
}
