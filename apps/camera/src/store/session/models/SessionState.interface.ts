import type { ISession, ISessionProgress } from '@models/sessions/Session.interface'

export interface ISessionState {
    loading: boolean,
    initialData: ISession | null,
    progress: ISessionProgress | null
}