import type { IApiClient } from './models'
import { apiLiveClient } from './live'
import { apiMockClient } from './mock'

let apiClient: IApiClient
const env: 'mock' | 'live' = 'live'

if (env === 'live') {
    apiClient = apiLiveClient
} else {
    apiClient = apiMockClient
}

export { apiClient }
