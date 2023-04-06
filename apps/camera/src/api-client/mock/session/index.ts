
import { SessionApiClientModel, type ISessionApiClient, type SessionApiClientOptions } from '../../models/session'

const options: SessionApiClientOptions = {
    endpoints: {
        fetchInitialData: '/initialData.json',
        fetchSessionProgress: 'static/mock-data/session/progress.json',
        startSession: 'static/mock-data/session/getStarted.json'
    },
    mockDelay: 300
}

const sessionApiClient: ISessionApiClient = new SessionApiClientModel(options);

export {
    sessionApiClient
}