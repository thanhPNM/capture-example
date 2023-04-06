import type { IApiClient } from '../models'

import { sessionApiClient } from './session'

const apiMockClient: IApiClient = {
    session: sessionApiClient
}

export {
    apiMockClient
}