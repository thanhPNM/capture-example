import type { IHttpRequestParams } from './HttpRequestParams.interface'

/**
 * @name IHttpClientConfig
 * @description
 * We'll drive the HttpClient from configuration in later chapters.
 */
export interface IHttpClientConfig {
    tokenKey: string
    clientType: string
}

/**
* @name IHttpClient
* @description
* Represents our HttpClient.
*/
export interface IHttpClient {
    /**
     * @name request
     * @description
     * A method that executes different types of http requests (i.e. GET/POST/etc)
     * based on the parameters argument.
     * The type R specify the type of the result returned
     * The type P specify the type of payload if any
     * @returns A Promise<R> as the implementation of this method will be async.
     */
    request<R, P = any>(parameters: IHttpRequestParams<P>): Promise<R>
}
