import useSWR, { type SWRConfiguration } from 'swr'

import { httpFetch, type HttpFetchProps } from '@/shared/http-fetch'

type HttpRequestConfig = Pick<HttpFetchProps, 'url' | 'method' | 'body'>

export type UseRequestSWRProps = HttpRequestConfig & {
  stopRequest?: boolean
} & SWRConfiguration

const fetcher = async <T>(props: HttpRequestConfig) => await httpFetch<T>(props)

/**
 * @description Hook to make requests to the API using fetch and swr
 */
export function useRequestSWR<T>({
  url = '/set-a-url',
  method = 'GET',
  stopRequest = false,
  body,
  ...rest
}: UseRequestSWRProps) {
  const key = stopRequest ? null : url

  const request = useSWR<T | undefined>(key, () => fetcher<T>({ url, method, body }), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    ...rest
  })

  return request
}
