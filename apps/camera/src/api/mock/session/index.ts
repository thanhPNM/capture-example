
import { SessionApiClientModel, type ISessionApiClient, type SessionApiClientOptions } from '../../models/session'

const options: SessionApiClientOptions = {
    endpoints: {
        fetchInitialData: '/initialData.json',
        fetchSessionProgress: '/progress.json',
        startSession: '/getStarted.json'
    },
    mockDelay: 300
}

const sessionApiClient: ISessionApiClient = new SessionApiClientModel(options);

export {
    sessionApiClient
}