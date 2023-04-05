import type { IHttpClient } from './models/HttpClient.interface'

import { HttpClientAxios } from './models/HttpClient.axios'
import { HttpClientFetch } from './models/HttpClient.fetch'

export * from './models'

let _httpClient: IHttpClient | undefined = undefined

export const useHttpClient = () => {
    if (!_httpClient) {
        const clientType: string = 'axios'

        clientType === 'fetch'
            ? _httpClient = new HttpClientFetch()
            : _httpClient = new HttpClientAxios()
    }
    return _httpClient as IHttpClient
}
