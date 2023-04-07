import type { ISessionInitialData, ISessionProgress, ISessionStartApiResponse } from '@models/sessions/Session.interface'

export interface ISessionState {
    loading: boolean,
    initialData: ISessionInitialData | null,
    startSessionApiResponse: ISessionStartApiResponse | null,
    progress: ISessionProgress | null
}