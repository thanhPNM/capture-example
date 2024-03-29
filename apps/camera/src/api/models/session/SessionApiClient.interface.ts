import type { ISessionInitialData, ISessionProgress, ISessionStartApiResponse, ISessionCaptureFlow } from '@models/sessions/Session.interface'

/**
 * @Name ISessionApiClient
 * @description
 * Interface for the Session api client module
 */
export interface ISessionApiClient {
    fetchInitialData: (sessionId: string) => Promise<ISessionInitialData>,
    fetchSessionProgress: (sessionId: string) => Promise<ISessionProgress>,
    startSesson: (sessionId: string) => Promise<ISessionStartApiResponse>,
    fetchCaptureFlow: (sessionId: string) => Promise<ISessionCaptureFlow>
}