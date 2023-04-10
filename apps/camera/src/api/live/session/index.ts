import { PUBLIC_URL_OPENAPI_HOST, PUBLIC_URL_OPENAPI_DIVE } from '$env/static/public'

import { SessionApiClientModel, type ISessionApiClient, type SessionApiClientOptions } from '../../models/session'

const options: SessionApiClientOptions = {
    endpoints: {
        fetchInitialData: `${PUBLIC_URL_OPENAPI_HOST}/capture/sessions/[sessionId]`,
        fetchSessionProgress: `${PUBLIC_URL_OPENAPI_HOST}/capture/sessions/[sessionId]/progress`,
        startSession: `${PUBLIC_URL_OPENAPI_HOST}/capture/[sessionId]/start`,
        fetchCaptureFlow: `${PUBLIC_URL_OPENAPI_DIVE}/capture/sessions/[sessionId]`
    }
}

const sessionApiClient: ISessionApiClient = new SessionApiClientModel(options);

export {
    sessionApiClient
}