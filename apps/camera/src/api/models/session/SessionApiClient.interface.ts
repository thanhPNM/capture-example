import type { ISession, ISessionProgress, ISessionStartApiResponse } from '@models/sessions/Session.interface'

/**
 * @Name ISessionApiClient
 * @description
 * Interface for the Session api client module
 */
export interface ISessionApiClient {
    fetchInitialData: (sessionId: string) => Promise<ISession>,
    fetchSessionProgress: (sessionId: string) => Promise<ISessionProgress>,
    startSesson: (sessionId: string) => Promise<ISessionStartApiResponse>
}