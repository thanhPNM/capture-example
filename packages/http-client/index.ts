import type { IHttpClient } from './models/HttpClient.interface'

import { HttpClientAxios } from './models/HttpClient.axios'
import { HttpClientFetch } from './models/HttpClient.fetch'

export * from './models'

enum HttpClientTypes {
    Axios = 'axios',
    Fetch = 'fetch'
}

let _httpClient: IHttpClient | undefined = undefined

export const useHttpClient = () => {
    if (!_httpClient) {
        const clientType: HttpClientTypes = HttpClientTypes.Axios

        clientType === HttpClientTypes.Axios
            ? _httpClient = new HttpClientAxios()
            : _httpClient = new HttpClientFetch()
    }
    return _httpClient as IHttpClient
}
