import type { IHttpRequestParams } from './HttpRequestParams.interface'
import type { IHttpClient, IHttpClientConfig } from './HttpClient.interface'
import { HttpContentTypes, HttpRequestMethods, HttpRequestType } from './Constants'
import { UrlUtils } from './UrlUtils'

/**
 * @name HttpClientFetch
 * @description
 * Wraps http client functionality to avoid directly using fetch
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClientFetch implements IHttpClient {
    constructor () { }

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
        console.log("🚀 ~ file: HttpClient.fetch.ts:28 ~ HttpClientFetch ~ fullUrl:", fullUrl)

        const options: RequestInit = {
            headers: {},
            credentials: "include",
            redirect: "follow"
        }

        if (headers) {
            options.headers = {
                ...headers
            }
        }

        if (!options.headers?.hasOwnProperty('Content-Type')) {
            options.headers = {
                ...headers,
                'Content-Type': HttpContentTypes.applicationJson
            }
        }

        // set headers Authorization
        if (requiresToken && options.headers) {
            // optional: you could add coded here to set the Authorization header with a bearer token
            // options.headers.Authorization = `bearer ${ JwtHelpers.getJwtToken() }`
        }

        let result!: R

        const checkRedirect = async (resp: any) => {
            if (resp.redirected) {
                document.location = resp.url
                return true
            }
            return false
        }

        try {
            switch (requestType) {
                default: {
                    console.warn('HttpClientFetch: invalid requestType argument or request type not implemented')
                }
                case HttpRequestType.get: {
                    options.method = HttpRequestMethods.get
                    const response = await fetch(fullUrl, options)
                    const redirected = await checkRedirect(response)
                    if (!redirected) {
                        result = await response.json() as R
                    }
                    break
                }
                case HttpRequestType.post: {
                    options.method = HttpRequestMethods.post
                    options.body = typeof payload === 'string' ? payload : JSON.stringify(payload)
                    const response = await fetch(fullUrl, options) as any
                    const redirected = await checkRedirect(response)
                    if (!redirected) {
                        result = await response.json() as R
                    }
                    break
                }
                case HttpRequestType.put: {
                    options.method = HttpRequestMethods.put
                    options.body = typeof payload === 'string' ? payload : JSON.stringify(payload)
                    const response = await fetch(fullUrl, options) as any
                    const redirected = await checkRedirect(response)
                    if (!redirected) {
                        result = await response.json() as R
                    }
                    break
                }
                case HttpRequestType.delete: {
                    options.method = HttpRequestMethods.delete
                    const response = await fetch(fullUrl, options)
                    const redirected = await checkRedirect(response)
                    if (!redirected) {
                        result = await response.json() as R
                    }
                    break
                }
                case HttpRequestType.patch: {
                    options.method = HttpRequestMethods.patch
                    options.body = typeof payload === 'string' ? payload : JSON.stringify(payload)
                    const response = await fetch(fullUrl, options) as any
                    const redirected = await checkRedirect(response)
                    if (!redirected) {
                        result = await response.json() as R
                    }
                    break
                }
            }
        } catch (error) {
            throw Error('HttpClientFetch: exception')
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