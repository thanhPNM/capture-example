import type { IApiClient } from '../models'

import { sessionApiClient } from './session'

const apiLiveClient: IApiClient = {
    session: sessionApiClient
}

export {
    apiLiveClient
}