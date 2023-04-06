import type { ISession, ISessionProgress, ISessionStartApiResponse } from '@models/sessions/Session.interface'

export interface ISessionState {
    loading: boolean,
    initialData: ISession | null,
    startSessionApiResponse: ISessionStartApiResponse | null,
    progress: ISessionProgress | null
}