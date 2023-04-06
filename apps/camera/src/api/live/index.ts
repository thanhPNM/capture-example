import type { IApiClient } from '../models'

import { sessionApiClient } from './session'
import { photosApiClient } from './photos'

const apiLiveClient: IApiClient = {
    session: sessionApiClient,
    photos: photosApiClient
}

export {
    apiLiveClient
}