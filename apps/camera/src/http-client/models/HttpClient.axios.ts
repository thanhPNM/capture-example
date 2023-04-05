import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import type { IHttpRequestParams } from './HttpRequestParams.interface'
import type { IHttpClient, IHttpClientConfig } from './HttpClient.interface'
import { HttpRequestMethods, HttpRequestType, type HttpContentTypes } from './Constants'
import { UrlUtils } from './UrlUtils'

/**
 * @name HttpClientAxios
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package\
 like axios
 * and simplify replacement in the future if such npm package would stop being devel\
oped or other reasons
 */
export class HttpClientAxios implements IHttpClient {
    constructor () {

    }

    /**
   * @name request
   * @description
   * A method that executes different types of http requests (i.e. GET/POST/etc)
   * based on the parameters argument.
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async.
   */
    async request<R, P = void>(parameters: IHttpRequestParams<P>): Promise<R> {
        const { endpoint, requestType, requiresToken, headers, payload, mockDelay } = parameters

        const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any)
        console.log("🚀 ~ file: HttpClient.axios.ts:35 ~ HttpClientAxios ~ fullUrl:", fullUrl, payload)

        const options: AxiosRequestConfig = {
            headers: {},
            maxRedirects: 0
        }

        if (headers) {
            options.headers = {
                ...headers
            }
        }

        if (requiresToken && options.headers) {
            options.withCredentials = true
        }

        let result!: R

        try {
            switch (requestType) {
                default: {
                    console.warn('HttpClientAxios: invalid requestType argument or request type not implemented')
                }
                case HttpRequestType.get: {
                    const response = await axios.get(fullUrl, options)
                    result = response?.data as R
                    break
                }
                case HttpRequestType.post: {
                    const response = await axios.post(fullUrl, payload, options)
                    result = response?.data as R
                    break
                }
                case HttpRequestType.put: {
                    const response = await axios.put(fullUrl, payload, options)
                    result = response?.data as R
                    break
                }
                case HttpRequestType.delete: {
                    const response = await axios.delete(fullUrl, options)
                    result = response?.data as R
                    break
                }
                case HttpRequestType.patch: {
                    const response = await axios.patch(fullUrl, payload, options)
                    result = response?.data as R
                    break
                }
            }
        } catch (error) {
            console.error('HttpClientAxios: exception', error)
            throw Error('HttpClientAxios: exception')
        }

        if (mockDelay) {
            return new Promise<R>((resolve) => {
                setTimeout(() => {
                    resolve(result)
                }, mockDelay)
            })
        }

        return result
    }
}
